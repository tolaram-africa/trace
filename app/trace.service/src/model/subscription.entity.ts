import { ServiceLevel } from './enum.base';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Customer } from './customer.entity';
import { SubscriptionsTier } from './subscription.tier.entity';
import { BaseEntity } from './base.entity';

export abstract class SubscriptionInstance extends BaseEntity {
  @OneToOne(() => SubscriptionsTier)
  @JoinColumn()
  public tier: SubscriptionsTier;

  @Column({
    type: 'enum',
    enum: ServiceLevel,
    default: ServiceLevel.CUSTOMER,
    nullable: true,
  })
  public level!: ServiceLevel;

  @Column({ default: false })
  public active: boolean;

  @Column({
    type: 'timestamptz',
    nullable: false,
  })
  public start: Date;

  @Column({
    type: 'timestamptz',
    nullable: false,
  })
  public end: Date;
}

@Entity({ name: 'customer_subscriptions' })
export class CustomerSubscription extends SubscriptionInstance {
  @OneToOne(() => Customer)
  @JoinColumn()
  public customer!: Customer;
}

@Entity({ name: 'tenant_subscriptions' })
export class TenantSubscription extends SubscriptionInstance {}
