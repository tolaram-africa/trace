import { NestFactory } from '@nestjs/core';
import { SERVICE_PROFILE } from '@@/libs/config';
import { GatewayModule } from './gateway.module';
import { getServiceInstance } from '@@/libs/service';

(async () => {
  const service = await NestFactory.create(GatewayModule);
  const { app, name, logger, port, host, url } = getServiceInstance(
    service,
    SERVICE_PROFILE.SRV_GATEWAY,
  );

  try {
    app.enableCors();
    await app.listen(port, host, () => {
      logger.log('Service startup completed...');
      logger.log(`${name.toUpperCase()} service is listening on ${url}/`);
    });
  } catch (error) {
    logger.error('A Fatal error occurred', error);
  }
})();
