import {
  HttpException,
  HttpStatus,
  Module,
  UnauthorizedException,
} from '@nestjs/common';
import { SharedConfigModule } from '@/common/shared-config.module';
import { GatewayService } from './gateway.service';
import {
  getConfigValue,
  IServiceConfig,
  PROD_ENV,
  SERVICE_PROFILE,
} from '@@/libs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { RemoteGraphQLDataSource, IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import { INVALID_AUTH_TOKEN, INVALID_BEARER_TOKEN } from './gateway.constants';
import { verify } from 'jsonwebtoken';

const getToken = (authToken: string): string => {
  console.log(authToken);
  const match = authToken.match(/^Bearer (.*)$/);
  if (!match || match.length < 2) {
    throw new HttpException(
      { message: INVALID_BEARER_TOKEN },
      HttpStatus.UNAUTHORIZED,
    );
  }
  return match[1];
};

const decodeToken = (tokenString: string) => {
  const secret = getConfigValue('app.secret') as unknown as string;
  const decoded = verify(tokenString, secret);
  if (!decoded) {
    throw new HttpException(
      { message: INVALID_AUTH_TOKEN },
      HttpStatus.UNAUTHORIZED,
    );
  }
  return decoded;
};

const handleAuth = ({ req }) => {
  try {
    if (req.headers.authorization) {
      const token = getToken(req.headers.authorization);
      const decoded: any = decodeToken(token);
      return {
        tenantId: decoded.tenantId,
        userId: decoded.userId,
        permissions: decoded.permissions,
        authorization: `${req.headers.authorization}`,
      };
    }
  } catch (err) {
    throw new UnauthorizedException(
      'User unauthorized with invalid authorization Headers',
    );
  }
};

@Module({
  imports: [
    SharedConfigModule.register(SERVICE_PROFILE.SRV_GATEWAY),
    GraphQLModule.forRootAsync<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const debug = configService.get<boolean>('app.debug') || !PROD_ENV;
        const serviceConfigs =
          configService.get<Array<IServiceConfig>>('services');
        const subgraphs: Array<{ name: string; url: string }> = Object.values(
          serviceConfigs,
        ).reduce(
          (
            services: Array<{ name: string; url: string }>,
            value: IServiceConfig,
          ) => {
            const url = `http://${value.host}:${value.port}`;
            const name = value.name[0].toUpperCase() + value.name.substring(1);
            if (!value.proxy) services.push({ name, url });
            return services;
          },
          [],
        );

        return {
          server: {
            debug,
            path: '/',
            cors: true,
            playground: debug,
            context: handleAuth,
          },
          gateway: {
            buildService: ({ url }) => {
              return new RemoteGraphQLDataSource({
                url,
                willSendRequest({ request, context }: any) {
                  request.http.headers.set('tenantId', context.tenantId);
                  request.http.headers.set('userId', context.userId);
                  request.http.headers.set(
                    'authorization',
                    context.authorization,
                  );
                  request.http.headers.set('permissions', context.permissions);
                },
              });
            },
            supergraphSdl: new IntrospectAndCompose({
              subgraphs,
            }),
          },
        };
      },
    }),
  ],
  controllers: [],
  providers: [GatewayService],
})
export class GatewayModule {}
