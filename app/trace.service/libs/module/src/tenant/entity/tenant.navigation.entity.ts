import { Entity, OneToOne, RelationId } from 'typeorm';
import { Tenant } from '@/module/tenant/entity/tenant.entity';
import { BaseNavigationOption } from './base.navigation-option.entity';

@Entity({ name: 'tenant_nav_options' })
export class TenantNavigation extends BaseNavigationOption {
  @OneToOne(() => Tenant, (tenant) => tenant.setting, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  public tenant: Tenant;

  @RelationId((item: TenantNavigation) => item.tenant)
  public tenantId!: string;
}
