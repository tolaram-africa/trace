import { Module } from '@nestjs/common';
import { CommonModule } from '@root/libs/common/src';
import { ManagerController } from './manager.controller';
import { ManagerResolver } from './manager.resolver';
import { ManagerService } from './manager.service';

@Module({
  imports: [CommonModule],
  controllers: [ManagerController],
  providers: [ManagerService, ManagerResolver],
})
export class ManagerModule {}
