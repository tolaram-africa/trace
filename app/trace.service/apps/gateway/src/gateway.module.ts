import { Module } from '@nestjs/common';
import { SharedConfigModule } from '@/common/shared-config/shared-config.module';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { SERVICE_PROFILE } from '@@/libs/config';

@Module({
  imports: [SharedConfigModule.register(SERVICE_PROFILE.SRV_GATEWAY)],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
