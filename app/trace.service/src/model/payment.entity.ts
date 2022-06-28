import {
  Column,
  Entity,
  OneToOne,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { User } from './user.entity';
import { Document } from './document.entity';
import { TransactionAccount } from './payment.transcation-account.entity';
import { PaymentType } from './payment.type.entity';
import { PaymentLoan } from './payment.loan.entity';
import { PaymentRequest } from './payment.request.entity';

export enum PayTransactionType {
  PAYMENT = 'payment',
  LOAN = 'loan',
  LOAN_SETTLEMENT = 'loan_settlement',
  SHORTAGE_SETTLEMENT = 'shortage_settlement',
  EXPENSE = 'expense',
  REFUND = 'refund',
  COMPLETE_PAYMENT = 'complete_payment',
  REPAYMENT = 'repayment',
  REIMBURSEMENT = 'reimbursement',
}

export enum PaymentRequestStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  CANCELLED = 'cancelled',
  PAYED = 'payed',
}

@Entity({ name: 'payments' })
export class Payment extends BaseTaggedEntity {
  @OneToOne(() => PaymentType)
  public type: PaymentType;

  @Column({
    type: 'enum',
    enum: PayTransactionType,
    default: PayTransactionType.PAYMENT,
    nullable: false,
  })
  public transactionType: PayTransactionType;

  @Column({
    type: 'enum',
    enum: PaymentRequestStatus,
    default: PaymentRequestStatus.PENDING,
    nullable: false,
  })
  public status: PaymentRequestStatus;

  @OneToOne(() => TransactionAccount)
  @JoinColumn()
  public sourceAccount: TransactionAccount;

  @OneToOne(() => TransactionAccount)
  @JoinColumn()
  public targetAccount: TransactionAccount;

  @Column({ type: 'int', default: 0 })
  public amount: number;

  @ManyToMany(() => User, { nullable: true })
  @JoinTable({ name: 'payment_users' })
  public involvedParties!: User[];

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public approvedTime!: Date;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public paymentTime!: Date;

  @OneToOne(() => PaymentLoan, { nullable: true })
  @JoinColumn()
  public loan!: PaymentLoan;

  @OneToOne(() => PaymentRequest, { nullable: true })
  @JoinColumn()
  public request!: PaymentRequest;

  @ManyToMany(() => Document)
  @JoinTable({ name: 'payment_docs' })
  public docs!: Document[];
}
