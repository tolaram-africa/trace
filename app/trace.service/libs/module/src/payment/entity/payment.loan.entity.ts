import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { Payment } from './payment.entity';
import { User } from '@/module/user/entity/user.entity';
import { Document } from '@/module/document/entity/document.entity';
import { PaymentLoanRequest } from './payment.loan-request.entity';

@Entity({ name: 'payment_loans' })
export class PaymentLoan extends SoftDeleteEntity {
  @OneToOne(() => PaymentLoanRequest, { nullable: false })
  @JoinColumn()
  public request: PaymentLoanRequest;

  @OneToOne(() => Payment, { nullable: true })
  @JoinColumn()
  public payment!: Payment;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public settleBy!: User;

  @Column({ type: 'timestamptz', nullable: true })
  public timeSettled!: Date;

  @ManyToMany(() => Document, { nullable: true })
  @JoinTable({ name: 'payment_loan_docs' })
  public docs!: Document[];
}
