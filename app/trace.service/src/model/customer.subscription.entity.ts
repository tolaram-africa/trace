import { Entity, OneToOne, JoinColumn } from 'typeorm';
import { BaseSubscription } from './base.subscription.entity';
import { Customer } from './customer.entity';

@Entity({ name: 'customer_subscriptions' })
export class CustomerSubscription extends BaseSubscription {
  @OneToOne(() => Customer)
  @JoinColumn()
  public customer: Customer;
}
