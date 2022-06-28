import { Injectable } from '@nestjs/common';

@Injectable()
export class ManagerService {
  getHello(): string {
    return 'Manager service..';
  }
}
