import { BaseTimedEntity } from './base.timed.entity';
import { User } from './user.entity';
import { Driver } from './driver.entity';
import { DriverExpensePlan } from './driver.expense-plan.entity';
import { Document } from './document.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { DriverExpenseType } from './driver.expense-type.entity';
import { TaskRequest } from './task.request.entity';
import { DriverGroup } from './driver.group.entity';

@Entity({ name: 'driver_expense_requests' })
export class DriverExpenseRequest extends BaseTimedEntity {
  @OneToOne(() => DriverExpenseType)
  @JoinColumn()
  public type: DriverExpenseType;

  @ManyToOne(() => TaskRequest, (expense) => expense.expenseRequests)
  @JoinColumn()
  public taskRequest: TaskRequest;

  @OneToOne(() => Driver, { nullable: false })
  @JoinColumn()
  public driver: Driver;

  @OneToOne(() => DriverGroup, { nullable: false })
  @JoinColumn()
  public driverGroup: DriverGroup;

  @OneToOne(() => DriverExpensePlan, { nullable: false })
  @JoinColumn()
  public plan: DriverExpensePlan;

  @Column({ type: 'int', default: 0 })
  public amountRequest: number;

  @Column({ type: 'date', nullable: true })
  public timeRequested: Date;

  @Column({ type: 'text', nullable: true })
  public notes: string;

  @Column({ type: 'int', default: 0, nullable: true })
  public amountApproved!: number;

  @Column({ type: 'timestamptz', nullable: true })
  public timeApproved!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public timeRejected!: Date;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy!: User;

  @OneToOne(() => Document, { nullable: true })
  @JoinColumn()
  public document!: Document;
}
