import { Module } from '@nestjs/common';
import { OperationController } from './operation.controller';
import { OperationService } from './operation.service';
import { SERVICE_PROFILE } from '@@/libs/config';
import { DatabaseModule } from '@/common/database.module';
import { SharedGraphQlModule } from '@/common/shared-graph-ql.module';
import { SharedConfigModule } from '@/common/shared-config.module';

@Module({
  imports: [
    DatabaseModule,
    SharedGraphQlModule.register(SERVICE_PROFILE.SRV_OPERATION),
    SharedConfigModule.register(SERVICE_PROFILE.SRV_OPERATION),
  ],
  controllers: [OperationController],
  providers: [OperationService],
})
export class OperationModule {}
