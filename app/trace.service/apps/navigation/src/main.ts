import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { bootstrapService, getServiceInstance } from '@@/libs/service';
import { NavigationModule } from './navigation.module';
import { SERVICE_PROFILE } from '@@/libs/config';

(async () => {
  const service = await NestFactory.create<NestExpressApplication>(
    NavigationModule,
  );
  const context = getServiceInstance(service, SERVICE_PROFILE.SRV_NAVIGATION);
  await bootstrapService(context);
})();
