import { Injectable } from '@nestjs/common';

@Injectable()
export class VectorService {
  getHello(): string {
    return 'Hello World!';
  }
}
