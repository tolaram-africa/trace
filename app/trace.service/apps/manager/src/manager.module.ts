import { Module } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { DatabaseModule } from '@/common/database/database.module';
import { SharedConfigModule } from '@/common/shared-config/shared-config.module';
import { SERVICE_PROFILE } from '@@/libs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { SampleModule } from './sample/sample.module';

@Module({
  imports: [
    ClientModule,
    AdminModule,
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      autoSchemaFile: join(process.cwd(), 'graphql/manager.gql'),
      debug: false,
      playground: true,
    }),
    SharedConfigModule.register(SERVICE_PROFILE.SRV_MANAGER),
    SampleModule,
  ],
  controllers: [],
  providers: [ManagerService],
})
export class ManagerModule {}
