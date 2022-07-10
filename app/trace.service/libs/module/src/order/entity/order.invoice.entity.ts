import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { Customer } from '@/module/customer/entity/customer.entity';
import { Order } from './order.entity';
import { Ticket } from '@/module/ticket/entity/ticket.entity';
import { User } from '@/module/user/entity/user.entity';
import { TransactionAccount } from '@/module/payment/entity/payment.transcation-account.entity';
import { File } from '@/module/file/entity/file.entity';

export enum OrderInvoiceStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  PAYED = 'payed',
  PARTLY_PAYED = 'partly_paid',
  REJECTED = 'rejected',
  CHANGE_REQUEST = 'change_request',
}

@Entity({ name: 'order_invoices' })
export class OrderInvoice extends TagEntity {
  @Column({
    type: 'enum',
    enum: OrderInvoiceStatus,
    default: OrderInvoiceStatus.PENDING,
  })
  public status: OrderInvoiceStatus;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @Column({ nullable: true })
  public approvedById!: string;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public approvedAt!: Date;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public dueAt!: Date;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public lastPaidAt!: Date;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public completedPaymentAt!: Date;

  @OneToOne(() => TransactionAccount, { nullable: true })
  @JoinColumn()
  public creditAccount!: TransactionAccount;

  @Column({ nullable: true })
  public creditAccountId!: string;

  @OneToMany(() => Order, (order) => order.invoice)
  @JoinColumn()
  public orders!: Order[];

  @OneToOne(() => Customer, { nullable: false })
  @JoinColumn()
  public customer: Customer;

  @Column({ nullable: true })
  public customerId!: string;

  @Column({ type: 'int', default: 0, nullable: true })
  public amountCharged: number;

  @Column({ type: 'int', default: 0, nullable: true })
  public amountPayed: number;

  @Column({ type: 'int', default: 0, nullable: true })
  public amountPending: number;

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'order_invoice_files' })
  public files!: File[];

  @OneToMany(() => Ticket, (ticket) => ticket.invoice, { nullable: true })
  @JoinColumn()
  public tickets!: Ticket[];
}
