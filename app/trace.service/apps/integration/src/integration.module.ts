import { Module } from '@nestjs/common';
import { DatabaseModule } from '@root/libs/common/src/database.module';
import { SharedConfigModule } from '@root/libs/common/src/shared-config.module';
import { SharedGraphQLModule } from '@root/libs/common/src/shared-graph-ql.module';
import { SERVICE_PROFILE } from '@root/libs/config';
import { IntegrationService } from './integration.service';

@Module({
  imports: [
    DatabaseModule,
    SharedGraphQLModule.register(SERVICE_PROFILE.SRV_INTEGRATION),
    SharedConfigModule.register(SERVICE_PROFILE.SRV_INTEGRATION),
  ],
  controllers: [],
  providers: [IntegrationService],
})
export class IntegrationModule {}
