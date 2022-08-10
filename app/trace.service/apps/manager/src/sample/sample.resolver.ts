import { Query, Resolver } from '@nestjs/graphql';
import { SampleService } from './sample.service';

@Resolver()
export class SampleResolver {
  constructor(private readonly sampleService: SampleService) {}

  @Query(() => String)
  async getSample() {
    return this.sampleService.getSample();
  }
}
