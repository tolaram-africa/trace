import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { Customer } from './customer.entity';
import { OrderInvoice } from './order.invoice.entity';
import { RouteCost } from './route.cost.entity';
import { User } from './user.entity';
import { OrderRequest } from './order.request.entity';

@Entity({ name: 'orders' })
export class Order extends BaseTaggedEntity {
  @Generated()
  @Column({ unique: true })
  public identifier: number;

  @OneToOne(() => OrderRequest, (request) => request.order, { nullable: false })
  @JoinColumn()
  public request: OrderRequest;

  @ManyToOne(() => OrderInvoice, (invoice) => invoice.orders, {
    nullable: true,
  })
  @JoinColumn()
  public invoice!: OrderInvoice;

  @OneToOne(() => Customer)
  @JoinColumn()
  public customer: Customer;

  @OneToOne(() => RouteCost, { nullable: true })
  @JoinColumn()
  public routeCost!: RouteCost;

  @Column({ type: 'timestamptz', nullable: true })
  public arrivalTime!: Date;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public arrivalCheckedBy!: User;

  @Column({ type: 'timestamptz', nullable: true })
  public confirmedTime!: Date;

  @OneToOne(() => User)
  @JoinColumn()
  public confirmedBy!: User;
}
