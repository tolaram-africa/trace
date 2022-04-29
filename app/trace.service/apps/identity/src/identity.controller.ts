import { Controller, Get } from '@nestjs/common';
import { IdentityService } from './identity.service';

@Controller()
export class IdentityController {
  constructor(private readonly identityService: IdentityService) {}

  @Get()
  getHello(): string {
    return this.identityService.getHello();
  }
}
