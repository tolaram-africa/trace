/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { DynamicModule, Module } from '@nestjs/common';
import { GraphQLModule as GraphQLFederationModule } from '@nestjs/graphql';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { SERVICE_PROFILE } from '@@/libs/config';
import { ServiceStateModule } from './service-state/service-state.module';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PROD_ENV } from '@@/libs/config';

@Module({
  imports: [
    ServiceStateModule,
    GraphQLFederationModule.forRootAsync<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const debug = configService.get<boolean>('app.debug') || !PROD_ENV;
        return {
          debug,
          playground: debug,
          uploads: false,
          path: '/',
          installSubscriptionHandlers: false,
          autoSchemaFile: join(
            process.cwd(),
            `graphql/${configService.get<string>(
              'services.' + SharedGraphQLModule.SERVICE_NAME + '.name',
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
export class SharedGraphQLModule {
  public static SERVICE_NAME: SERVICE_PROFILE;

  static register(name: SERVICE_PROFILE): DynamicModule {
    SharedGraphQLModule.SERVICE_NAME = name;

    return {
      module: SharedGraphQLModule,
      providers: [],
      exports: [],
    };
  }
}
