import { Module } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { DatabaseModule } from '@/common/database/database.module';

@Module({
  imports: [ClientModule, DatabaseModule, AdminModule],
  controllers: [],
  providers: [ManagerService],
})
export class ManagerModule {}
