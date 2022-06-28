import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { SoftDeleteEntity } from './base.timed.entity';
import { Customer } from './customer.entity';
import { Task } from './task.entity';
import { Ticket } from './ticket.entity';
import { User } from './user.entity';
import { OrderFreight } from './order.freight.entity';
import { Document } from './document.entity';
import { Order } from './order.entity';

export enum OrderRequestStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  CANCELLED = 'cancelled',
}

@Entity({ name: 'order_requests' })
export class OrderRequest extends SoftDeleteEntity {
  @Generated()
  @Column({ unique: true })
  public identifier: number;

  @OneToOne(() => Order, (order) => order.request, { nullable: true })
  @JoinColumn()
  public order!: Order;

  @OneToOne(() => Task, (task) => task.orderRequest, { nullable: false })
  @JoinColumn()
  public task: Task;

  @Column({
    type: 'enum',
    enum: OrderRequestStatus,
    default: OrderRequestStatus.PENDING,
  })
  public status: OrderRequestStatus;

  @Column({ default: false })
  public verifyOTP: boolean;

  @Column({ default: false })
  public autoZoneOTP: boolean;

  @Column({ default: false })
  public autoInvoice: boolean;

  @OneToOne(() => Customer, { nullable: false })
  @JoinColumn()
  public customer: Customer;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @Column({ type: 'timestamptz', nullable: true })
  public approvedAt!: Date;

  @OneToMany(() => OrderFreight, (freight) => freight.orderRequest, {
    nullable: true,
  })
  @JoinColumn()
  public freights!: OrderFreight[];

  @OneToOne(() => Document, { nullable: true })
  @JoinColumn()
  public docment!: Document;

  @OneToMany(() => Ticket, (ticket) => ticket.orderRequest)
  @JoinColumn()
  public tickets!: Ticket[];
}
