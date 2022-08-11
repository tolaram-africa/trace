import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { OperationSource } from '@@/data/operation';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        <TypeOrmModuleOptions>{
          retryAttempts: 5,
          retryDelay: 3000,
          autoLoadEntities: true,
          ...OperationSource,
        },
    }),
  ],
})
export class DatabaseModule {}
