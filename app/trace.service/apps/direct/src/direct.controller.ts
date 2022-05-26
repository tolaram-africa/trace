import { Controller, Get } from '@nestjs/common';
import { DirectService } from './direct.service';

@Controller()
export class DirectController {
  constructor(private readonly directService: DirectService) {}

  @Get()
  getHello(): string {
    return this.directService.getHello();
  }
}
