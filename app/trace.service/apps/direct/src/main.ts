import { NestFactory } from '@nestjs/core';
import { DirectModule } from './direct.module';

async function bootstrap() {
  const app = await NestFactory.create(DirectModule);
  await app.listen(3000);
}
bootstrap();
