import { Module } from '@nestjs/common';
import { DatabaseModule } from '@root/libs/common/src/database.module';
import { SharedConfigModule } from '@/common/shared-config.module';
import { SharedGraphQLModule } from '@/common/shared-graph-ql.module';
import { SERVICE_PROFILE } from '@@/libs/config';
import { IdentityController } from './identity.controller';
import { IdentityService } from './identity.service';

@Module({
  imports: [
    DatabaseModule,
    SharedGraphQLModule.register(SERVICE_PROFILE.SRV_IDENTITY),
    SharedConfigModule.register(SERVICE_PROFILE.SRV_IDENTITY),
  ],
  controllers: [IdentityController],
  providers: [IdentityService],
})
export class IdentityModule {}
