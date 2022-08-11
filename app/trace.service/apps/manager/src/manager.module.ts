import { Module } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { DatabaseModule } from '@/common/database.module';
import { SharedConfigModule } from '@/common/shared-config.module';
import { PROD_ENV, SERVICE_PROFILE } from '@@/libs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { SampleModule } from './sample/sample.module';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientModule,
    AdminModule,
    DatabaseModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: async (configService: ConfigService) => {
        const debug = configService.get<boolean>('app.debug') || !PROD_ENV;
        return {
          installSubscriptionHandlers: true,
          autoSchemaFile: join(
            process.cwd(),
            `graphql/${SERVICE_PROFILE.SRV_GATEWAY}.gql`,
          ),
          path: '/graphql',
          debug,
          playground: debug,
        };
      },
      inject: [ConfigService],
    }),
    SharedConfigModule.register(SERVICE_PROFILE.SRV_MANAGER),
    SampleModule,
  ],
  controllers: [],
  providers: [ManagerService],
})
export class ManagerModule {}
