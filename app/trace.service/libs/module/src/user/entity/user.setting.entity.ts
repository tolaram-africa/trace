import { OneToOne, JoinColumn, Entity, Index } from 'typeorm';
import { BaseSetting } from '@/module/tenant/entity/base.profile-setting.entity';
import { User } from '@/module/user/entity/user.entity';

@Entity({ name: 'user_settings' })
export class UserSetting extends BaseSetting {
  @Index('idx_user_settings_userid')
  @OneToOne(() => User, (user) => user.setting)
  @JoinColumn()
  public user: User;
}
