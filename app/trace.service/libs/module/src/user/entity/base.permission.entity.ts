import { Column, JoinColumn, OneToOne } from 'typeorm';
import { SystemFeature } from '@/module/system/entity/system.feature.entity';
import { TenantEntity } from '@/common/entity/base.tenant.entity';
import { RBACPermission } from '@/common/entity/enum.user';

export abstract class BasePermission extends TenantEntity {
  @OneToOne(() => SystemFeature)
  @JoinColumn()
  public feature: SystemFeature;

  @Column({
    type: 'enum',
    enum: RBACPermission,
    array: true,
    default: [RBACPermission.READ],
  })
  public actions: RBACPermission[];
}
