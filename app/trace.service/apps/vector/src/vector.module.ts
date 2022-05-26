import { Module } from '@nestjs/common';
import { VectorController } from './vector.controller';
import { VectorService } from './vector.service';

@Module({
  imports: [],
  controllers: [VectorController],
  providers: [VectorService],
})
export class VectorModule {}
