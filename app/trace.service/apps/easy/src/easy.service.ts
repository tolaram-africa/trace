import { Injectable } from '@nestjs/common';

@Injectable()
export class EasyService {
  getHello(): string {
    return 'Hello World!';
  }
}