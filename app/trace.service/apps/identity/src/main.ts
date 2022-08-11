import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SERVICE_PROFILE } from '@@/libs/config';
import { bootstrapService, getServiceInstance } from '@root/libs/service';
import { IdentityModule } from './identity.module';

(async () => {
  const service = await NestFactory.create<NestExpressApplication>(
    IdentityModule,
  );
  const context = getServiceInstance(service, SERVICE_PROFILE.SRV_IDENTITY);
  context.app.enableCors();
  await bootstrapService(context, false);
})();
