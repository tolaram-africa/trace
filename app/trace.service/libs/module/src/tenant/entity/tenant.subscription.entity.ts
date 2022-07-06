import { Column, Entity, JoinColumn, OneToOne, RelationId } from 'typeorm';
import { BaseSubscription } from './base.subscription.entity';
import { Tenant } from '@/module/tenant/entity/tenant.entity';

@Entity({ name: 'tenant_subscriptions' })
export class TenantSubscription extends BaseSubscription {
  @OneToOne(() => Tenant, {
    nullable: true,
    onDelete: 'SET NULL',
    orphanedRowAction: 'nullify',
  })
  @JoinColumn()
  public tenant!: Tenant;

  @RelationId((item: TenantSubscription) => item.tenant)
  @Column({ type: 'uuid', nullable: true })
  public tenantId!: string;
}
