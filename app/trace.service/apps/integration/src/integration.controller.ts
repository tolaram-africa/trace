import { Controller, Get } from '@nestjs/common';
import { IntegrationService } from './integration.service';

@Controller()
export class IntegrationController {
  constructor(private readonly integrationService: IntegrationService) {}

  @Get()
  getHello(): string {
    return this.integrationService.getHello();
  }
}
