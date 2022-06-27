import { Entity } from 'typeorm';
import { BaseSetting } from './base.profile-setting.entity';

@Entity({ name: 'tenant_settings' })
export class TenantSetting extends BaseSetting {}
