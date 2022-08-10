import { Module } from '@nestjs/common';
import { ServiceStateService } from './service-state.service';
import { ServiceStateResolver } from './service-state.resolver';

@Module({
  providers: [ServiceStateResolver, ServiceStateService],
})
export class ServiceStateModule {}
