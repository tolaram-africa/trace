import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { Customer } from '@/module/customer/entity/customer.entity';
import { OrderInvoice } from './order.invoice.entity';
import { RouteCost } from '@/module/route/entity/route.cost.entity';
import { User } from '@/module/user/entity/user.entity';
import { OrderRequest } from './order.request.entity';

@Entity({ name: 'orders' })
export class Order extends TagEntity {
  @Generated()
  @Column({ unique: true })
  public identifier!: number;

  @OneToOne(() => OrderRequest, (request) => request.order, { nullable: false })
  @JoinColumn()
  public request: OrderRequest;

  @Column({ nullable: true })
  public requestId!: string;

  @ManyToOne(() => OrderInvoice, (invoice) => invoice.orders, {
    nullable: true,
  })
  @JoinColumn()
  public invoice!: OrderInvoice;

  @Column({ nullable: true })
  public invoiceId!: string;

  @OneToOne(() => Customer)
  @JoinColumn()
  public customer: Customer;

  @Column({ nullable: true })
  public customerId!: string;

  @OneToOne(() => RouteCost, { nullable: true })
  @JoinColumn()
  public routeCost!: RouteCost;

  @Column({ nullable: true })
  public routeCostId!: string;

  @Column({ type: 'timestamptz', nullable: true })
  public arrivalTime!: Date;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public arrivalCheckedBy!: User;

  @Column({ nullable: true })
  public arrivalCheckedById!: string;

  @Column({ type: 'timestamptz', nullable: true })
  public confirmedTime!: Date;

  @OneToOne(() => User)
  @JoinColumn()
  public confirmedBy!: User;

  @Column({ nullable: true })
  public confirmedById!: string;
}
