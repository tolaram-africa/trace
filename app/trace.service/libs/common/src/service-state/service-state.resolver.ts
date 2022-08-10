import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ServiceStateService } from './service-state.service';
import { ServiceState } from './entities/service-state.entity';
import { CreateServiceStateInput } from './dto/create-service-state.input';
import { UpdateServiceStateInput } from './dto/update-service-state.input';

@Resolver(() => ServiceState)
export class ServiceStateResolver {
  constructor(private readonly serviceStateService: ServiceStateService) {}

  @Mutation(() => ServiceState)
  createServiceState(
    @Args('createServiceStateInput')
    createServiceStateInput: CreateServiceStateInput,
  ) {
    return this.serviceStateService.create(createServiceStateInput);
  }

  @Query(() => [ServiceState], { name: 'serviceState' })
  findAll() {
    return this.serviceStateService.findAll();
  }

  @Query(() => ServiceState, { name: 'serviceState' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.serviceStateService.findOne(id);
  }

  @Mutation(() => ServiceState)
  updateServiceState(
    @Args('updateServiceStateInput')
    updateServiceStateInput: UpdateServiceStateInput,
  ) {
    return this.serviceStateService.update(
      updateServiceStateInput.id,
      updateServiceStateInput,
    );
  }

  @Mutation(() => ServiceState)
  removeServiceState(@Args('id', { type: () => Int }) id: number) {
    return this.serviceStateService.remove(id);
  }
}
