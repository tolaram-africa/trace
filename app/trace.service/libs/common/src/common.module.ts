import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from '@root/ormconfig';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CommonService } from './common.service';
import { CommonResolver } from './common.resolver';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      installSubscriptionHandlers: true,
      driver: ApolloDriver,
      // TODO: Set option for persisted schema file.
      autoSchemaFile: true,
      debug: true,
      playground: true,
    }),
  ],
  providers: [CommonService, CommonResolver],
  exports: [CommonService],
})
export class CommonModule {}
