import { Module } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { OperationSource } from '@@/data/operation';
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
          ...OperationSource,
        },
    }),
    AdminModule,
  ],
  controllers: [],
  providers: [ManagerService],
})
export class ManagerModule {}
