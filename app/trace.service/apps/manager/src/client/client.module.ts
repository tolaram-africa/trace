import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../static'),
      exclude: ['/graphql', '/data-admin'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class ClientModule {}
