import { Module } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { dataSourceConfig } from '@@/data/connection';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [
    ClientModule,
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        <TypeOrmModuleOptions>{
          retryAttempts: 5,
          retryDelay: 3000,
          autoLoadEntities: true,
          ...dataSourceConfig,
        },
    }),
    AdminModule,
  ],
  controllers: [],
  providers: [ManagerService],
})
export class ManagerModule {}
