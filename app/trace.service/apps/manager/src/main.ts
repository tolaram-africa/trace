import { NestFactory } from '@nestjs/core';
import { ManagerModule } from './manager.module';
import { SERVICE_PROFILE } from '@@/libs/config';
import { getServiceInstance } from '@@/libs/service';

(async () => {
  const service = await NestFactory.create(ManagerModule);
  const { app, logger, port, host, url } = getServiceInstance(
    service,
    SERVICE_PROFILE.SRV_MANAGER,
  );

  try {
    await app.listen(port, host, () => {
      logger.log('Service startup completed...');
      logger.log(`Trace Manager is listening on ${url}/`);
      logger.log(`Data Admin is listening on ${url}/data-admin/`);
      logger.log(`GraphQL is listening on ${url}/graphql/`);
    });
  } catch (error) {
    logger.error('A Fatal error occurred', error);
  }
})();
