import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from 'typeorm';
import { Tenant } from '@/module/tenant/entity/tenant.entity';
import { CoreDeleteEntity } from '@/common/entity/base.core.soft-delete.entity';

@Entity({ name: 'tenant_domains' })
export class TenantDomain extends CoreDeleteEntity {
  @Column({ default: false })
  public default: boolean;

  @Index('idx_tenant_domain_tenantid')
  @ManyToOne(() => Tenant, (tenant) => tenant.domains, { onDelete: 'CASCADE' })
  @JoinColumn()
  public tenant: Tenant;

  @RelationId((item: TenantDomain) => item.tenant)
  @Column({ type: 'uuid', nullable: true })
  public tenantId: string;

  @Column({ type: 'varchar', length: 128, nullable: false })
  public address: string;

  @Column({ default: false })
  public verified: boolean;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public expires!: Date;
}
