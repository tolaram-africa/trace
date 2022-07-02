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
} from '@/module/tenant/entity';
import { Document, DocumentType } from '@/module/document/entity';
import { transformResources } from './util';

const tenants = [
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
export const AdminTenantModule = transformResources(tenants, 'Tenants');

const documents = [Document, DocumentType];
export const AdminDocumentModule = transformResources(documents, 'Documents');
