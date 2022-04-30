import { NestFactory } from '@nestjs/core';
import { ManagementModule } from './management.module';

async function bootstrap() {
  const app = await NestFactory.create(ManagementModule);
  await app.listen(3000);
}
bootstrap();
