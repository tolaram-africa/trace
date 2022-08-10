import { NestFactory } from '@nestjs/core';
import { IdentityModule } from './identity.module';

async function bootstrap() {
  const app = await NestFactory.create(IdentityModule);
  await app.listen(3000);
}
bootstrap();
