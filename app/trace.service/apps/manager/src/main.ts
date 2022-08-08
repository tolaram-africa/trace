import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ManagerModule } from './manager.module';

(async () => {
  const app = await NestFactory.create(ManagerModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  const PORT = 3000;
  const HOSTNAME = 'service.manager';
  const url = `http://${HOSTNAME}:${PORT}`;

  await app.listen(PORT, HOSTNAME, () => null);
  console.log(`Trace Manager is under ${url}/`);
  console.log(`Data Admin is under ${url}/data-admin/`);
  console.log(`GraphQL is under ${url}/graphql/`);
})();
