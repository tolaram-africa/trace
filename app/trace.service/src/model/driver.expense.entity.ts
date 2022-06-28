import { SoftDeleteEntity } from './base.soft-delete.entity';
import { DriverExpenseRequest } from './driver.expense-request.entity';
import { User } from './user.entity';
import { Payment } from './payment.entity';
import { Document } from './document.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
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

  @OneToOne(() => DriverGroup, { nullable: false })
  @JoinColumn()
  public driverGroup: DriverGroup;

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

  @Column({ type: 'timestamptz', nullable: true })
  public timeSettled!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public timeApproved!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public timeRejected!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public timePayed!: Date;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy!: User;

  @OneToOne(() => Payment)
  @JoinColumn()
  public payment!: Payment;

  @ManyToMany(() => Document, { nullable: true })
  @JoinTable({ name: 'driver_exp_docs' })
  public docs!: Document[];
}
