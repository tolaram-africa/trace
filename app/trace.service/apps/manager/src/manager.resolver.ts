import { Query, Resolver } from '@nestjs/graphql';
import { ManagerService } from './manager.service';

@Resolver()
export class ManagerResolver {
  constructor(private readonly managerService: ManagerService) {}

  @Query(() => String)
  getManager(): string {
    return this.managerService.getHello();
  }
}
