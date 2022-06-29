import {
  Column,
  Entity,
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

  @ManyToOne(() => OrderRequest, (request) => request.tickets)
  @JoinColumn()
  public orderRequest!: OrderRequest;

  @ManyToOne(() => OrderInvoice, (invoice) => invoice.tickets)
  @JoinColumn()
  public orderInvoice: OrderInvoice;

  @OneToOne(() => User)
  @JoinColumn()
  public resolvedBy: User;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public timeResolved!: Date;

  @Column({ type: 'text', nullable: false })
  public subject: string;

  @OneToMany(() => TicketMessage, (message) => message.ticket, {
    nullable: false,
  })
  @JoinColumn()
  public messages!: TicketMessage[];
}
