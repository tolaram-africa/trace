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
import { File } from '@/module/file/entity/file.entity';
import { PaymentLoanRequest } from './payment.loan-request.entity';

@Entity({ name: 'payment_loans' })
export class PaymentLoan extends SoftDeleteEntity {
  @OneToOne(() => PaymentLoanRequest, { nullable: false })
  @JoinColumn()
  public request: PaymentLoanRequest;

  @Column({ nullable: true })
  public requestId!: string;

  @OneToOne(() => Payment, { nullable: true })
  @JoinColumn()
  public payment!: Payment;

  @Column({ nullable: true })
  public paymentId!: string;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public settleBy!: User;

  @Column({ nullable: true })
  public settleById!: string;

  @Column({ type: 'timestamptz', nullable: true })
  public settledAt!: Date;

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'payment_loan_files' })
  public files!: File[];
}
