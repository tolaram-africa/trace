import { Injectable } from '@nestjs/common';

@Injectable()
export class OperationService {
  getHello(): string {
    return 'Hello World!';
  }
}
