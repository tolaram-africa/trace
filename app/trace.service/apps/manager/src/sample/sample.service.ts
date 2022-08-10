import { Injectable } from '@nestjs/common';

@Injectable()
export class SampleService {
  getSample(): string {
    return 'Sample instance...';
  }
}
