import { Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseSetting } from './base.profile-setting.entity';
import { Tenant } from '@/module/tenant/entity/tenant.entity';

@Entity({ name: 'tenant_settings' })
export class TenantSetting extends BaseSetting {
  @OneToOne(() => Tenant, (user) => user.setting, { nullable: false })
  @JoinColumn()
  public tenant: Tenant;
}
