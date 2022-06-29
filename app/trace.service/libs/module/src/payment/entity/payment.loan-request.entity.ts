import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { PaymentLoanType } from './payment.loan-type.entity';
import { User } from '@/module/user/entity/user.entity';
import { Document } from '@/module/document/entity/document.entity';
import { Currency } from '@/module/system/entity/currency.entity';
import { TransactionAccount } from './payment.transcation-account.entity';

export enum PaymentLoanRequestStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  PAYED = 'payed',
  SETTLED = 'settled',
}

@Entity({ name: 'payment_loan_requets' })
export class PaymentLoanRequest extends SoftDeleteEntity {
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
