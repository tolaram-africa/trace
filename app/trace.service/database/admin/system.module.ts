import {
  Currency,
  Bank,
  SystemFeature,
  SystemUserPermission,
  SystemUserRole,
} from '@/module/system/entity';
import { SubscriptionsTier } from '@/module/subscription/entity';
import { transformResources } from './util';

const systems = [
  Currency,
  Bank,
  SubscriptionsTier,
  SystemFeature,
  SystemUserPermission,
  SystemUserRole,
];
export const AdminSystemModule = transformResources(systems, 'System');
