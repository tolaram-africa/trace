import { NestFactory } from '@nestjs/core';
import { VectorModule } from './vector.module';

async function bootstrap() {
  const app = await NestFactory.create(VectorModule);
  await app.listen(3000);
}
bootstrap();
