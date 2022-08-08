import { Entity, OneToOne, RelationId } from 'typeorm';
import { BaseSetting } from './base.profile-setting.entity';
import { Tenant } from '@/module/tenant/entity/tenant.entity';

@Entity({ name: 'tenant_settings' })
export class TenantSetting extends BaseSetting {
  @OneToOne(() => Tenant, (tenant) => tenant.setting, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  public tenant: Tenant;

  @RelationId((item: TenantSetting) => item.tenant)
  public tenantId!: string;
}
