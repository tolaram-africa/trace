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
import { File } from '@/module/file/entity/file.entity';
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
  @OneToOne(() => PaymentLoanType)
  @JoinColumn()
  public type: PaymentLoanType;

  @Column({ nullable: true })
  public typeId!: string;

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

  @Column({ nullable: true })
  public creditorAccountId!: string;

  @OneToOne(() => TransactionAccount)
  @JoinColumn()
  public requestAccount: TransactionAccount;

  @Column({ nullable: true })
  public requestAccountId!: string;

  @Column({ type: 'int', default: 0 })
  public pendingAmount: number;

  @OneToOne(() => Currency)
  @JoinColumn()
  public currency: Currency;

  @Column({ nullable: true })
  public currencyId!: string;

  @OneToOne(() => User)
  @JoinColumn()
  public loanee: User;

  @Column({ nullable: true })
  public loaneeId!: string;

  @Column({ type: 'timestamptz', nullable: true })
  public approvedAt!: Date;

  @Column({ type: 'text', nullable: true })
  public notes!: string;

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'payment_loan_req_files' })
  public files!: File[];
}
