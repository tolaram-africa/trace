import { OneToOne, JoinColumn, Entity, Index, Column } from 'typeorm';
import { BaseSetting } from '@/module/tenant/entity/base.profile-setting.entity';
import { User } from '@/module/user/entity/user.entity';
import { Tenant } from '@/module/tenant/entity';

@Entity({ name: 'user_settings' })
export class UserSetting extends BaseSetting {
  @Index('idx_user_settings_userid')
  @OneToOne(() => User, (user) => user.setting)
  @JoinColumn()
  public user: User;

  @Column({ nullable: true })
  public userId!: string;

  @OneToOne(() => Tenant)
  @JoinColumn()
  public tenant: Tenant;

  @Column({ nullable: true })
  public tenantId!: string;
}
