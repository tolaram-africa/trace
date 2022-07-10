import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { Customer } from '@/module/customer/entity/customer.entity';
import { Task } from '@/module/task/entity/task.entity';
import { Ticket } from '@/module/ticket/entity/ticket.entity';
import { User } from '@/module/user/entity/user.entity';
import { OrderFreight } from './order.freight.entity';
import { File } from '@/module/file/entity/file.entity';
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
  public identifier!: number;

  @OneToOne(() => Order, (order) => order.request, { nullable: true })
  @JoinColumn()
  public order!: Order;

  @Column({ nullable: true })
  public orderId!: string;

  @OneToOne(() => Task, (task) => task.orderRequest, { nullable: false })
  @JoinColumn()
  public task: Task;

  @Column({ nullable: true })
  public taskId!: string;

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

  @Column({ nullable: true })
  public customerId!: string;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @Column({ nullable: true })
  public approvedById!: string;

  @Column({ type: 'timestamptz', nullable: true })
  public approvedAt!: Date;

  @OneToMany(() => OrderFreight, (freight) => freight.orderRequest, {
    nullable: true,
  })
  @JoinColumn()
  public freights!: OrderFreight[];

  @OneToOne(() => File, { nullable: true })
  @JoinColumn()
  public file!: File;

  @Column({ nullable: true })
  public fileId!: string;

  @OneToMany(() => Ticket, (ticket) => ticket.orderRequest)
  @JoinColumn()
  public tickets!: Ticket[];
}
