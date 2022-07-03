export * from './customer.client.entity';
export * from './customer.contract.entity';
export * from './customer.entity';
export * from './customer.group.entity';
export * from './customer.loader.entity';
export * from './customer.location.entity';
export * from './customer.setting.entity';
export * from './customer.subscription.entity';

import {
  Customer,
  CustomerGroup,
  CustomerSetting,
  CustomerContract,
  CustomerClient,
  CustomerLocation,
  CustomerLoader,
  CustomerSubscription,
} from './';

export const CustomerModuleEntity = [
  Customer,
  CustomerGroup,
  CustomerSetting,
  CustomerContract,
  CustomerClient,
  CustomerLocation,
  CustomerLoader,
  CustomerSubscription,
];
