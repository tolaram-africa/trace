import { Column, JoinColumn, OneToOne } from 'typeorm';
import { SystemFeature } from './system.module.entity';
import { TenantEntity } from './base.tenant.entity';
import { RBACPermission } from './enum.user';

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
