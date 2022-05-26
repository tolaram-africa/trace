import { Module } from '@nestjs/common';
import { DirectController } from './direct.controller';
import { DirectService } from './direct.service';

@Module({
  imports: [],
  controllers: [DirectController],
  providers: [DirectService],
})
export class DirectModule {}
