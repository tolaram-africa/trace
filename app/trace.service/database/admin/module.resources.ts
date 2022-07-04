import { transformResources } from './util';
import { PaymentModuleEntity, PaymentRequest } from '@/module/payment/entity';
import { SystemModuleEntity } from '@/module/system/entity';
import { TenantModuleEntity } from '@/module/tenant/entity';
import { TagModuleEntity } from '@/module/tag/entity';
import { User, UserModuleEntity } from '@/module/user/entity';
import { File, FileType } from '@/module/file/entity';
import { Location, LocationModuleEntity } from '@/module/location/entity';
import { ScheduleModuleEntity } from '@/module/schedule/entity';
import { DashboardModuleEntity } from '@/module/dashboard/entity';
import { CustomerModuleEntity } from '@/module/customer/entity';
import { ProductModuleEntity } from '@/module/product/entity';
import { WarehouseModuleEntity } from '@/module/warehouse/entity';
import { TemplateModuleEntity } from '@/module/template/entity';
import { SupplierModuleEntity } from '@/module/supplier/entity';
import { SubscriptionModuleEntity } from '@/module/subscription/entity';
import { ShipmentModuleEntity } from '@/module/shipment/entity';
import { RatingModuleEntity } from '@/module/rating/entity';
import { NetworkModuleEntity } from '@/module/network-card/entity';
import { StockModuleEntity } from '@/module/stock/entity';
import { ShortageModuleEntity } from '@/module/shortage/entity';
import { RouteModuleEntity } from '@/module/route/entity';
import { FormModuleEntity } from '@/module/form/entity';
import { InsuranceModuleEntity } from '@/module/insurance/entity';
import { Driver, DriverModuleEntity } from '@/module/driver/entity';

export const AdminSystemModule = transformResources(
  SystemModuleEntity,
  'System',
);
export const AdminTenantModule = transformResources(
  TenantModuleEntity,
  'Tenants',
);
export const AdminTagModule = transformResources(TagModuleEntity, 'Tags');
export const AdminFileModule = transformResources([File, FileType], 'Files');
export const AdminUserModule = transformResources(
  [...UserModuleEntity, User],
  'Users',
);
export const AdminDashboardModule = transformResources(
  DashboardModuleEntity,
  'Dashboards',
);
export const AdminPaymentModule = transformResources(
  [...PaymentModuleEntity, PaymentRequest],
  'Payments',
);
export const AdminLocationModule = transformResources(
  [...LocationModuleEntity, Location],
  'Locations',
);
export const AdminScheduleModule = transformResources(
  ScheduleModuleEntity,
  'Schedules',
);
export const AdminCustomerModule = transformResources(
  CustomerModuleEntity,
  'Customers',
);
export const AdminDriverModule = transformResources(
  [...DriverModuleEntity, Driver],
  'Drivers',
);
export const AdminProductModule = transformResources(
  ProductModuleEntity,
  'Products',
);
export const AdminWarehouseModule = transformResources(
  WarehouseModuleEntity,
  'Warehouses',
);
export const AdminTemplateModule = transformResources(
  TemplateModuleEntity,
  'Templates',
);
export const AdminSupplierModule = transformResources(
  SupplierModuleEntity,
  'Suppliers',
);
export const AdminSubscriptionModule = transformResources(
  SubscriptionModuleEntity,
  'Subscriptions',
);
export const AdminShipmentModule = transformResources(
  ShipmentModuleEntity,
  'Shipments',
);
export const AdminRatingModule = transformResources(
  RatingModuleEntity,
  'Ratings',
);
export const AdminNetworkModule = transformResources(
  NetworkModuleEntity,
  'Networks',
);
export const AdminStockModule = transformResources(StockModuleEntity, 'Stocks');
export const AdminShortageModule = transformResources(
  ShortageModuleEntity,
  'Shortages',
);
export const AdminRouteModule = transformResources(RouteModuleEntity, 'Routes');
export const AdminFormModule = transformResources(FormModuleEntity, 'Forms');
export const AdminIsuranceModule = transformResources(
  InsuranceModuleEntity,
  'Insurances',
);
