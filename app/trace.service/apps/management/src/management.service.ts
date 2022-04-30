import { Injectable } from '@nestjs/common';

@Injectable()
export class ManagementService {
  getHello(): string {
    return 'Hello World!';
  }
}
