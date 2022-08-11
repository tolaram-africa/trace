import { NestFactory } from '@nestjs/core';
import { OperationModule } from './operation.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SERVICE_PROFILE } from '@@/libs/config';
import { bootstrapService, getServiceInstance } from '@@/libs/service';

(async () => {
  const service = await NestFactory.create<NestExpressApplication>(
    OperationModule,
  );
  const context = getServiceInstance(service, SERVICE_PROFILE.SRV_OPERATION);
  await bootstrapService(context);
})();
