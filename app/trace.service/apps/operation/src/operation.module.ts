import { Module } from '@nestjs/common';
import { OperationService } from './operation.service';
import { SERVICE_PROFILE } from '@@/libs/config';
import { DatabaseModule } from '@/common/database.module';
import { SharedGraphQLModule } from '@/common/shared-graph-ql.module';
import { SharedConfigModule } from '@/common/shared-config.module';

@Module({
  imports: [
    DatabaseModule,
    SharedGraphQLModule.register(SERVICE_PROFILE.SRV_OPERATION),
    SharedConfigModule.register(SERVICE_PROFILE.SRV_OPERATION),
  ],
  controllers: [],
  providers: [OperationService],
})
export class OperationModule {}
