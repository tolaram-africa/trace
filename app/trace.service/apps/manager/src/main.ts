import { NestFactory } from '@nestjs/core';
import { ManagerModule } from './manager.module';
import { SERVICE_PROFILE } from '@@/libs/config';
import {
  bootstrapService,
  getServiceInstance,
  IServiceInstance,
} from '@@/libs/service';

(async () => {
  const service = await NestFactory.create(ManagerModule);
  const context = getServiceInstance(service, SERVICE_PROFILE.SRV_MANAGER);
  await bootstrapService(context, false, (ctx: IServiceInstance) => {
    const { logger, url } = ctx;
    logger.log('Service startup completed...');
    logger.log(`Trace Manager is listening on ${url}/`);
    logger.log(`Data Admin is listening on ${url}/data-admin/`);
    logger.log(`GraphQL is listening on ${url}/graphql/`);
  });
})();
