import {
  Column,
  Entity,
  OneToOne,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from 'typeorm';
import { TagEntity } from './base.tag.entity';
import { User } from './user.entity';
import { Document } from './document.entity';
import {
  Payment,
  PaymentRequestStatus,
  PayTransactionType,
} from './payment.entity';
import { PaymentType } from './payment.type.entity';

@Entity({ name: 'payment_requests' })
export class PaymentRequest extends TagEntity {
  @OneToOne(() => PaymentType)
  public type: PaymentType;

  @Column({ default: false })
  public reflectionInBank: boolean;

  @Column({
    type: 'enum',
    enum: PaymentRequestStatus,
    default: PaymentRequestStatus.PENDING,
    nullable: false,
  })
  public status: PaymentRequestStatus;

  @Column({
    type: 'enum',
    enum: PayTransactionType,
    default: PayTransactionType.PAYMENT,
    nullable: false,
  })
  public transactionType: PayTransactionType;

  @Column({ type: 'int', default: 0, nullable: true })
  public amountRequested!: number;

  @Column({ type: 'int', default: 0, nullable: true })
  public amountApproved!: number;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public approvedTime!: Date;

  @OneToOne(() => Payment, { nullable: true })
  @JoinColumn()
  public payment!: Payment;

  @ManyToMany(() => Document, { nullable: true })
  @JoinTable({ name: 'payment_request_docs' })
  public docs!: Document[];
}
