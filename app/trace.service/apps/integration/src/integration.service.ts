import { Injectable } from '@nestjs/common';

@Injectable()
export class IntegrationService {
  getHello(): string {
    return 'Hello World!';
  }
}
