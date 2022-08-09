import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { DatabaseModule } from './database/database.module';
import { SharedConfigModule } from './shared-config/shared-config.module';

@Module({
  imports: [DatabaseModule, SharedConfigModule],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
