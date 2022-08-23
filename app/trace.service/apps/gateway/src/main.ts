import { NestFactory } from '@nestjs/core';
import { SERVICE_PROFILE } from '@@/libs/config';
import { GatewayModule } from './gateway.module';
import {
  bootstrapService,
  getServiceInstance,
  IServiceInstance,
} from '@@/libs/service';

(async () => {
  const service = await NestFactory.create(GatewayModule);
  const context = getServiceInstance(service, SERVICE_PROFILE.SRV_GATEWAY);
  await bootstrapService(context, false, (ctx: IServiceInstance) => {
    const { logger, url, name } = ctx;
    logger.log('Service startup completed...');
    logger.log(`${name.toUpperCase()} service is listening on ${url}/`);
  });
})();
