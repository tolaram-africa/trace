import { Module } from '@nestjs/common';
import { DatabaseModule } from '@/common/database.module';
import { SharedConfigModule } from '@/common/shared-config.module';
import { SharedGraphQLModule } from '@/common/shared-graph-ql.module';
import { SERVICE_PROFILE } from '@@/libs/config';
import { NavigationService } from './navigation.service';

@Module({
  imports: [
    DatabaseModule,
    SharedGraphQLModule.register(SERVICE_PROFILE.SRV_NAVIGATION),
    SharedConfigModule.register(SERVICE_PROFILE.SRV_NAVIGATION),
  ],
  controllers: [],
  providers: [NavigationService],
})
export class NavigationModule {}
