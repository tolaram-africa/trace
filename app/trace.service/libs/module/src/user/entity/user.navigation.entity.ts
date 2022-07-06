import { Tenant } from '@/module/tenant/entity/tenant.entity';
import { Column, Entity, JoinColumn, OneToOne, RelationId } from 'typeorm';
import { BaseNavigationOption } from '@/module/tenant/entity/base.navigation-option.entity';
import { User } from './user.entity';

@Entity({ name: 'user_nav_options' })
export class UserNavigation extends BaseNavigationOption {
  @OneToOne(() => Tenant, {
    nullable: true,
    onDelete: 'SET NULL',
    orphanedRowAction: 'nullify',
  })
  @JoinColumn()
  public tenant!: Tenant;

  @RelationId((item: UserNavigation) => item.tenant)
  @Column({ type: 'uuid', nullable: true })
  public tenantId!: string;

  @OneToOne(() => User, (tenant) => tenant.navigation, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  public user: User;

  @RelationId((item: UserNavigation) => item.user)
  public userId!: string;
}
