import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { getServiceConfig, SERVICE_PROFILE } from '@@/libs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => getServiceConfig(SharedConfigModule.SERVICE_NAME)],
    }),
  ],
})
export class SharedConfigModule {
  public static SERVICE_NAME: SERVICE_PROFILE;

  static register(name: SERVICE_PROFILE): DynamicModule {
    SharedConfigModule.SERVICE_NAME = name;
    return {
      module: SharedConfigModule,
      providers: [],
      exports: [],
    };
  }
}
