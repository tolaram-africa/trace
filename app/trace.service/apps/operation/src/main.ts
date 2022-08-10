import { NestFactory } from '@nestjs/core';
import { OperationModule } from './operation.module';

async function bootstrap() {
  const app = await NestFactory.create(OperationModule);
  await app.listen(3000);
}
bootstrap();
