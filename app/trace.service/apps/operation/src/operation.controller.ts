import { Controller, Get } from '@nestjs/common';
import { OperationService } from './operation.service';

@Controller()
export class OperationController {
  constructor(private readonly operationService: OperationService) {}

  @Get()
  getHello(): string {
    return this.operationService.getHello();
  }
}
