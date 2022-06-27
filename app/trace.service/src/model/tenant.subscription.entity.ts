import { Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseSubscription } from './base.subscription.entity';
import { Tenant } from './tenant.entity';

@Entity({ name: 'tenant_subscriptions' })
export class TenantSubscription extends BaseSubscription {
  @OneToOne(() => Tenant, { nullable: true })
  @JoinColumn()
  public tenant!: Tenant;
}
