import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { User } from '@/module/user/entity/user.entity';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { TicketMessage } from './ticket.message.entity';
import { Customer } from '@/module/customer/entity/customer.entity';
import { OrderRequest } from '@/module/order/entity/order.request.entity';
import { OrderInvoice } from '@/module/order/entity/order.invoice.entity';

@Entity({ name: 'tickets' })
export class Ticket extends TagEntity {
  @OneToOne(() => Customer)
  @JoinColumn()
  public customer: Customer;

  @Column({ nullable: true })
  public customerId!: string;

  @Generated()
  @Column({ unique: true })
  public identifier!: number;

  @ManyToOne(() => OrderRequest, (request) => request.tickets)
  @JoinColumn()
  public orderRequest!: OrderRequest;

  @Column({ nullable: true })
  public orderRequestId!: string;

  @ManyToOne(() => OrderInvoice, (invoice) => invoice.tickets)
  @JoinColumn()
  public invoice: OrderInvoice;

  @Column({ nullable: true })
  public invoiceId!: string;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public openedBy!: User;

  @Column({ nullable: true })
  public openedById!: string;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public resolvedBy!: User;

  @Column({ nullable: true })
  public resolvedById!: string;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public resolvedAt!: Date;

  @Column({ type: 'text' })
  public subject!: string;

  @OneToMany(() => TicketMessage, (message) => message.ticket, {
    nullable: false,
  })
  @JoinColumn()
  public messages!: TicketMessage[];
}
