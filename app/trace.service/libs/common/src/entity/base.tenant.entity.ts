import { Column, Index, JoinColumn, OneToOne, RelationId } from 'typeorm';
import { CoreEntity } from './base.core.entity';
import { Tenant } from '@/module/tenant/entity/tenant.entity';

export abstract class TenantEntity extends CoreEntity {
  @Column({ type: 'uuid', nullable: true })
  public createdBy!: string;

  @Column({ type: 'uuid', nullable: true })
  public modifiedBy!: string;

  @Index()
  @OneToOne(() => Tenant, {
    nullable: true,
    onDelete: 'SET NULL',
    orphanedRowAction: 'nullify',
  })
  @JoinColumn()
  public tenant!: Tenant;

  @RelationId((item: TenantEntity) => item.tenant)
  @Column({ type: 'uuid', nullable: true })
  public tenantId!: string;
}
