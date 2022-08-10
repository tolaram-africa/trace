import { Module } from '@nestjs/common';
import { SharedConfigModule } from '@/common/shared-config.module';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { IServiceConfig, PROD_ENV, SERVICE_PROFILE } from '@@/libs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { RemoteGraphQLDataSource, IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';

const handleAuth = () => {
  return {};
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
          debug,
          server: {
            context: handleAuth,
          },
          gateway: {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            buildService: ({ name, url }) => {
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
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
