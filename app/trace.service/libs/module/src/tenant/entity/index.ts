export * from './base.profile-setting.entity';
export * from './base.subscription.entity';
export * from './tenant.billing.entity';
export * from './tenant.domain.entity';
export * from './tenant.email.entity';
export * from './tenant.entity';
export * from './tenant.integration-config.entity';
export * from './tenant.integration.entity';
export * from './tenant.invoice.entity';
export * from './tenant.pay-provider.entity';
export * from './tenant.setting.entity';
export * from './tenant.sms.entity';
export * from './tenant.subscription.entity';

import {
  Tenant,
  TenantDomain,
  TenantSetting,
  TenantBill,
  TenantInvoice,
  TenantEmailConfig,
  TenantSmsConfig,
  TenantIntegration,
  TenantPayProvider,
  TenantSubscription,
  TenantIntegrationConfig,
} from './';

export const TenantModuleEntity = [
  Tenant,
  TenantDomain,
  TenantSetting,
  TenantBill,
  TenantInvoice,
  TenantEmailConfig,
  TenantSmsConfig,
  TenantIntegration,
  TenantPayProvider,
  TenantSubscription,
  TenantIntegrationConfig,
];
