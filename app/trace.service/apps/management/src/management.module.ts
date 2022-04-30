import { Module } from '@nestjs/common';
import { ManagementController } from './management.controller';
import { ManagementService } from './management.service';

@Module({
  imports: [],
  controllers: [ManagementController],
  providers: [ManagementService],
})
export class ManagementModule {}
