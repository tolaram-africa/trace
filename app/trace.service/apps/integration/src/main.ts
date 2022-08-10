import { NestFactory } from '@nestjs/core';
import { IntegrationModule } from './integration.module';

async function bootstrap() {
  const app = await NestFactory.create(IntegrationModule);
  await app.listen(3000);
}
bootstrap();
