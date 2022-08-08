export * from './currency.entity';
export * from './system.bank.entity';
export * from './system.feature.entity';
export * from './system.user-auth.entity';
export * from './system.user-permission.entity';
export * from './system.user-role.entity';

import {
  Currency,
  Bank,
  SystemFeature,
  SystemUserPermission,
  SystemUserRole,
} from './';
import { SubscriptionTier } from '@/module/subscription/entity';

export const SystemModuleEntity = [
  Currency,
  Bank,
  SystemFeature,
  SystemUserPermission,
  SystemUserRole,
  SubscriptionTier,
];
