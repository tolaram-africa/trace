import { Injectable } from '@nestjs/common';

@Injectable()
export class IdentityService {
  getHello(): string {
    return 'Hello World!';
  }
}
