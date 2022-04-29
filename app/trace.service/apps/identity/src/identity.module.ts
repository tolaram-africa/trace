import { Module } from '@nestjs/common';
import { IdentityController } from './identity.controller';
import { IdentityService } from './identity.service';

@Module({
  imports: [],
  controllers: [IdentityController],
  providers: [IdentityService],
})
export class IdentityModule {}
