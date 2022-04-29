import { Injectable } from '@nestjs/common';

@Injectable()
export class DirectService {
  getHello(): string {
    return 'Hello World!';
  }
}
