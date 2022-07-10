import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ManagerModule } from './manager.module';

async function bootstrap() {
  const app = await NestFactory.create(ManagerModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  const PORT = 3000;
  await app.listen(PORT);
  console.log(`Trace Admin is under http://localhost:${PORT}/admin`);
}

bootstrap();
