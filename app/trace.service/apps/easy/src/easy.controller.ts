import { Controller, Get } from '@nestjs/common';
import { EasyService } from './easy.service';

@Controller()
export class EasyController {
  constructor(private readonly easyService: EasyService) {}

  @Get()
  getHello(): string {
    return this.easyService.getHello();
  }
}
