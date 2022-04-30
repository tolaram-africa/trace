import { NestFactory } from '@nestjs/core';
import { EasyModule } from './easy.module';

async function bootstrap() {
  const app = await NestFactory.create(EasyModule);
  await app.listen(3000);
}
bootstrap();
