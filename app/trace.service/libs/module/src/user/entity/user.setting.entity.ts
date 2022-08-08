import { OneToOne, Entity, RelationId, Column, JoinColumn } from 'typeorm';
import { BaseSetting } from '@/module/tenant/entity/base.profile-setting.entity';
import { User } from '@/module/user/entity/user.entity';
import { Tenant } from '@/module/tenant/entity';

@Entity({ name: 'user_settings' })
export class UserSetting extends BaseSetting {
  @OneToOne(() => Tenant, {
    nullable: true,
    onDelete: 'SET NULL',
    orphanedRowAction: 'nullify',
  })
  @JoinColumn()
  public tenant!: Tenant;

  @RelationId((item: UserSetting) => item.tenant)
  @Column({ type: 'uuid', nullable: true })
  public tenantId!: string;

  @OneToOne(() => User, (user) => user.setting, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  public user: User;

  @RelationId((item: UserSetting) => item.user)
  public userId!: string;
}
