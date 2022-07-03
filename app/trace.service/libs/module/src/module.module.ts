import { Module } from '@nestjs/common';
import { ModuleService } from './module.service';
import { UserModule } from './user/user.module';
import { TenantModule } from './tenant/tenant.module';
import { BeaconModule } from './beacon/beacon.module';
import { CustomerModule } from './customer/customer.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { FileModule } from './file/file.module';
import { DriverModule } from './driver/driver.module';
import { EventModule } from './event/event.module';
import { FormModule } from './form/form.module';
import { InsuranceModule } from './insurance/insurance.module';
import { LocationModule } from './location/location.module';
import { MaintenanceModule } from './maintenance/maintenance.module';
import { NetworkCardModule } from './network-card/network-card.module';
import { AssetModule } from './asset/asset.module';
import { OrderModule } from './order/order.module';
import { PaymentModule } from './payment/payment.module';
import { ProductModule } from './product/product.module';
import { RatingModule } from './rating/rating.module';
import { RouteModule } from './route/route.module';
import { ScheduleModule } from './schedule/schedule.module';
import { ShipmentModule } from './shipment/shipment.module';
import { ShortageModule } from './shortage/shortage.module';
import { StockModule } from './stock/stock.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { SupplierModule } from './supplier/supplier.module';
import { SystemModule } from './system/system.module';
import { TagModule } from './tag/tag.module';
import { TaskModule } from './task/task.module';
import { TemplateModule } from './template/template.module';
import { TicketModule } from './ticket/ticket.module';
import { WarehouseModule } from './warehouse/warehouse.module';

@Module({
  providers: [ModuleService],
  exports: [ModuleService],
  imports: [
    UserModule,
    TenantModule,
    BeaconModule,
    CustomerModule,
    DashboardModule,
    FileModule,
    DriverModule,
    EventModule,
    FormModule,
    InsuranceModule,
    LocationModule,
    MaintenanceModule,
    NetworkCardModule,
    AssetModule,
    OrderModule,
    PaymentModule,
    ProductModule,
    RatingModule,
    RouteModule,
    ScheduleModule,
    ShipmentModule,
    ShortageModule,
    StockModule,
    SubscriptionModule,
    SupplierModule,
    SystemModule,
    TagModule,
    TaskModule,
    TemplateModule,
    TicketModule,
    WarehouseModule,
  ],
})
export class ModuleModule {}
