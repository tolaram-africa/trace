import { Entity, OneToOne, JoinColumn, Column } from 'typeorm';
import { Customer } from '@/module/customer/entity/customer.entity';
import { BaseSubscription } from '@/module/tenant/entity/base.subscription.entity';

@Entity({ name: 'customer_subscriptions' })
export class CustomerSubscription extends BaseSubscription {
  @OneToOne(() => Customer)
  @JoinColumn()
  public customer: Customer;

  @Column({ nullable: true })
  public customerId!: string;
}
