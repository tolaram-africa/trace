import { DeleteDateColumn } from 'typeorm';
import { TenantEntity } from '@/common/entity/base.tenant.entity';

export abstract class SoftDeleteEntity extends TenantEntity {
  @DeleteDateColumn({
    type: 'timestamptz',
    nullable: true,
  })
  public deletedAt!: Date;
}
