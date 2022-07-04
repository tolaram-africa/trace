import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity';
import { DriverExpenseRequest } from './driver.expense-request.entity';
import { User } from '@/module/user/entity/user.entity';
import { Payment } from '@/module/payment/entity/payment.entity';
import { File } from '@root/libs/module/src/file/entity/file.entity';
import { Driver } from './driver.entity';
import { DriverGroup } from './driver.group.entity';

export enum DriverExpenseStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  PAYED = 'payed',
  SETTLED = 'settled',
}

@Entity({ name: 'driver_expenses' })
export class DriverExpense extends SoftDeleteEntity {
  @OneToOne(() => Driver, { nullable: false })
  @JoinColumn()
  public driver: Driver;

  @Column({ nullable: true })
  public driverId!: string;

  @OneToOne(() => DriverGroup, { nullable: false })
  @JoinColumn()
  public driverGroup: DriverGroup;

  @Column({ nullable: true })
  public driverGroupId!: string;

  @Column({
    type: 'enum',
    enum: DriverExpenseStatus,
    default: DriverExpenseStatus.PENDING,
    nullable: false,
  })
  public status: DriverExpenseStatus;

  @OneToOne(() => DriverExpenseRequest, { nullable: false })
  @JoinColumn()
  public expenseRequest: DriverExpenseRequest;

  @Column({ nullable: true })
  public expenseRequestId!: string;

  @Column({ type: 'timestamptz', nullable: true })
  public settledAt!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public approvedAt!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public rejectedAt!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public payedAt!: Date;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy!: User;

  @Column({ nullable: true })
  public approvedById!: string;

  @OneToOne(() => Payment, { nullable: true })
  @JoinColumn()
  public payment!: Payment;

  @Column({ nullable: true })
  public paymentId!: string;

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'driver_exp_files' })
  public files!: File[];
}
