import { Module } from '@nestjs/common';
import { EasyController } from './easy.controller';
import { EasyService } from './easy.service';

@Module({
  imports: [],
  controllers: [EasyController],
  providers: [EasyService],
})
export class EasyModule {}
