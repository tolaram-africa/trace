import { Module } from '@nestjs/common';
import { DatabaseModule } from '@/common/database.module';
import { SharedConfigModule } from '@/common/shared-config.module';
import { SharedGraphQlModule } from '@/common/shared-graph-ql.module';
import { SERVICE_PROFILE } from '@@/libs/config';
import { NavigationController } from './navigation.controller';
import { NavigationService } from './navigation.service';

@Module({
  imports: [
    DatabaseModule,
    SharedGraphQlModule.register(SERVICE_PROFILE.SRV_NAVIGATION),
    SharedConfigModule.register(SERVICE_PROFILE.SRV_NAVIGATION),
  ],
  controllers: [NavigationController],
  providers: [NavigationService],
})
export class NavigationModule {}
