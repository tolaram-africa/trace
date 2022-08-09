import { NestFactory } from '@nestjs/core';
import { ManagerModule } from './manager.module';
import { Logger } from '@nestjs/common';
import { getStartupConfig, SERVICE_PROFILE } from '@@/libs/config';

(async () => {
  const app = await NestFactory.create(ManagerModule);
  app.useLogger(['debug', 'log', 'warn', 'error']);
  const logger = new Logger();
  const config = getStartupConfig(app, SERVICE_PROFILE.SRV_MANAGER);
  const url = `http://${config.host}:${config.port}`;

  /* Try starting up server. */
  logger.log(`Starting service ${config.name}...`);
  try {
    await app.listen(config.port, config.host, () => {
      logger.log('Service startup completed...');
      logger.log(`Trace Manager is listening on ${url}/`);
      logger.log(`Data Admin is listening on ${url}/data-admin/`);
      logger.log(`GraphQL is listening on ${url}/graphql/`);
    });
  } catch (error) {
    logger.error('A Fatal error occurred', error);
  }
})();
