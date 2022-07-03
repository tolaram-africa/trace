import { transformResources } from './util';
import { PaymentModuleEntity, PaymentRequest } from '@/module/payment/entity';
import { SystemModuleEntity } from '@/module/system/entity';
import { TenantModuleEntity } from '@/module/tenant/entity';
import { TagModuleEntity } from '@/module/tag/entity';
import { User, UserModuleEntity } from '@/module/user/entity';
import { File, FileType } from '@/module/file/entity';

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
export const AdminPaymentModule = transformResources(
  [...PaymentModuleEntity, PaymentRequest],
  'Payments',
);
