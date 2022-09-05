import { Column, JoinColumn, OneToOne } from 'typeorm';
import { SystemFeature } from '@/module/system/entity/system.feature.entity';
import { TenantEntity } from '@/common/entity/base.tenant.entity';
import { PermissionOption } from '@/common/entity/enum.user';

export abstract class BasePermission extends TenantEntity {
  @OneToOne(() => SystemFeature)
  @JoinColumn()
  public feature: SystemFeature;

  @Column({
    type: 'enum',
    enum: PermissionOption,
    array: true,
    default: [PermissionOption.READ],
  })
  public actions: PermissionOption[];
}
