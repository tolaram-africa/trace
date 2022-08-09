import { Module } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { DatabaseModule } from '@/common/database/database.module';
import { SharedConfigModule } from '@/common/shared-config/shared-config.module';
import { SERVICE_PROFILE } from '@@/libs/config';

@Module({
  imports: [
    ClientModule,
    AdminModule,
    DatabaseModule,
    SharedConfigModule.register(SERVICE_PROFILE.SRV_MANAGER),
  ],
  controllers: [],
  providers: [ManagerService],
})
export class ManagerModule {}
