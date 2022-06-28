import { Module } from '@nestjs/common';
import { ModuleService } from './module.service';
import { UserModule } from './user/user.module';

@Module({
  providers: [ModuleService],
  exports: [ModuleService],
  imports: [UserModule],
})
export class ModuleModule {}
