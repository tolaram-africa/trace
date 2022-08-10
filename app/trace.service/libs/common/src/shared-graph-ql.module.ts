/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { DynamicModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { SERVICE_PROFILE } from '@@/libs/config';
import { ServiceStateModule } from './service-state/service-state.module';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PROD_ENV } from '@@/libs/config';

@Module({
  imports: [
    ServiceStateModule,
    GraphQLModule.forRootAsync<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const debug = configService.get<boolean>('app.debug') || !PROD_ENV;
        return {
          debug,
          playground: debug,
          uploads: false,
          autoSchemaFile: join(
            process.cwd(),
            `graphql/${configService.get<string>(
              'services.' + SharedGraphQlModule.SERVICE_NAME + '.name',
            )}.gql`,
          ),
          context: ({ req }: any) => ({ req }),
          formatError: (error: GraphQLError) => {
            const graphQLFormattedError: GraphQLFormattedError = {
              message:
                // @ts-ignore
                error?.extensions?.exception?.response?.message ||
                error?.message,
            };
            return graphQLFormattedError;
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class SharedGraphQlModule {
  public static SERVICE_NAME: SERVICE_PROFILE;

  static register(name: SERVICE_PROFILE): DynamicModule {
    SharedGraphQlModule.SERVICE_NAME = name;

    return {
      module: SharedGraphQlModule,
      providers: [],
      exports: [],
    };
  }
}
