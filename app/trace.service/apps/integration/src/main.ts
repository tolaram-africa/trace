import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SERVICE_PROFILE } from '@@/libs/config';
import { bootstrapService, getServiceInstance } from '@@/libs/service';
import { IntegrationModule } from './integration.module';

(async () => {
  const service = await NestFactory.create<NestExpressApplication>(
    IntegrationModule,
  );
  const context = getServiceInstance(service, SERVICE_PROFILE.SRV_INTEGRATION);
  await bootstrapService(context);
})();
