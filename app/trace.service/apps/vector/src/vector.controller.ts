import { Controller, Get } from '@nestjs/common';
import { VectorService } from './vector.service';

@Controller()
export class VectorController {
  constructor(private readonly vectorService: VectorService) {}

  @Get()
  getHello(): string {
    return this.vectorService.getHello();
  }
}
