import { Module } from '@nestjs/common';
import { IntegrationController } from './integration.controller';
import { IntegrationService } from './integration.service';

@Module({
  imports: [],
  controllers: [IntegrationController],
  providers: [IntegrationService],
})
export class IntegrationModule {}
