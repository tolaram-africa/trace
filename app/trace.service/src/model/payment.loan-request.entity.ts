import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { BaseTimedEntity } from './base.timed.entity';
import { PaymentLoanType } from './payment.loan-type.entity';
import { User } from './user.entity';
import { Document } from './document.entity';
import { Currency } from './currency.entity';
import { TransactionAccount } from './user.transcation-account.entity';

export enum PaymentLoanRequestStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  PAYED = 'payed',
  SETTLED = 'settled',
}

@Entity({ name: 'payment_loan_requets' })
export class PaymentLoanRequest extends BaseTimedEntity {
  public type: PaymentLoanType;

  @Column({
    type: 'enum',
    enum: PaymentLoanRequestStatus,
    default: PaymentLoanRequestStatus.PENDING,
    nullable: false,
  })
  public status: PaymentLoanRequestStatus;

  @Column({ type: 'int', default: 0 })
  public amount: number;

  @OneToOne(() => TransactionAccount)
  @JoinColumn()
  public creditorAccount: TransactionAccount;

  @OneToOne(() => TransactionAccount)
  @JoinColumn()
  public creditAccount: TransactionAccount;

  @Column({ type: 'int', default: 0 })
  public pendingAmount: number;

  @OneToOne(() => Currency)
  @JoinColumn()
  public currency: Currency;

  @OneToOne(() => User)
  @JoinColumn()
  public loanee: User;

  @Column({ type: 'timestamptz', nullable: true })
  public timeApproved: Date;

  @Column({ type: 'text', nullable: true })
  public notes!: string;

  @ManyToMany(() => Document, { nullable: true })
  @JoinTable({ name: 'payment_loan_req_docs' })
  public docs!: Document[];
}
