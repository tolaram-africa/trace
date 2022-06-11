import { Module } from '@nestjs/common';
import { CommonModule } from '@root/libs/common/src';
import { CoreController } from './core.controller';
import { CoreService } from './core.service';

@Module({
  imports: [CommonModule],
  controllers: [CoreController],
  providers: [CoreService],
})
export class CoreModule {}
