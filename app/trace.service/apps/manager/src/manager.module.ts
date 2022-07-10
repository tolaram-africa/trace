import { Module } from '@nestjs/common';
import { ManagerController } from './manager.controller';
import { ManagerService } from './manager.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { dataSourceConfig } from '@@/data/connection';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
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
  controllers: [ManagerController],
  providers: [ManagerService],
})
export class ManagerModule {}
