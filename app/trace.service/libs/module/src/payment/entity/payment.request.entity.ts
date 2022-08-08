import {
  Column,
  Entity,
  OneToOne,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from 'typeorm';
import {
  TagEntity,
  PaymentRequestStatus,
  PayTransactionType,
} from '@/common/entity';
import { User } from '@/module/user/entity';
import { File } from '@/module/file/entity';
import { PaymentType, Payment } from './';

@Entity({ name: 'payment_requests' })
export class PaymentRequest extends TagEntity {
  @OneToOne(() => PaymentType)
  public type: PaymentType;

  @Column({ nullable: true })
  public typeId!: string;

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

  @Column({ nullable: true })
  public approvedById!: string;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public approvedTime!: Date;

  @OneToOne(() => Payment, { nullable: true })
  @JoinColumn()
  public payment!: Payment;

  @Column({ nullable: true })
  public paymentId!: string;

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'payment_request_files' })
  public files!: File[];
}
