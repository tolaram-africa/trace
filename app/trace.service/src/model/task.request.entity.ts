import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BaseTimedEntity } from './base.timed.entity';
import { Customer } from './customer.entity';
import { User } from './user.entity';
import { Task } from './task.entity';
import { StockOutRequest } from './stock.out-request.entity';
import { TaskRoute } from './task.route.entity';
import { TaskVehicle } from './task.vehicle.entity';
import { TaskDriver } from './task.driver.entity';
import { TaskTrailer } from './task.trailer.entity';
import { Schedule } from './schedule.entity';
import { PaymentLoanRequest } from './payment.loan-request.entity';
import { PaymentRequest } from './payment.request.entity';
import { TaskDestination } from './task.destination.entity';
import { DriverExpenseRequest } from './driver.expense-request.entity';
import { RouteCost } from './route.cost.entity';

@Entity({ name: 'task_requests' })
export class TaskRequest extends BaseTimedEntity {
  @Column({ default: true })
  public active!: boolean;

  @Column({ default: false })
  public schedule: boolean;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public scheduleExpiry!: Date;

  @ManyToMany(() => Schedule, { nullable: true })
  @JoinTable({ name: 'task_request_schedules' })
  public schedules!: Schedule[];

  @OneToOne(() => Task, (task) => task.request, { nullable: true })
  @JoinColumn()
  public task!: Task;

  @OneToOne(() => StockOutRequest, { nullable: true })
  @JoinColumn()
  public fuelRequest!: StockOutRequest;

  @OneToOne(() => User, { nullable: true })
  public requestedBy!: User;

  @OneToOne(() => User, { nullable: true })
  public approvedBy!: User;

  @Column({ type: 'timestamptz', nullable: true })
  public approvedTime!: Date;

  @OneToOne(() => Customer, { nullable: true })
  public customer!: Customer;

  @OneToOne(() => TaskRoute, (taskRoute) => taskRoute.request, {
    nullable: true,
  })
  @JoinColumn()
  public route!: TaskRoute;

  @OneToMany(
    () => TaskDestination,
    (taskDestinations) => taskDestinations.taskRequest,
    { nullable: true },
  )
  @JoinColumn()
  public destinations!: TaskDestination[];

  @OneToMany(() => TaskVehicle, (taskVehicles) => taskVehicles.request, {
    nullable: true,
  })
  @JoinColumn()
  public vehicles!: TaskVehicle[];

  @OneToMany(() => TaskDriver, (taskDrivers) => taskDrivers.request, {
    nullable: true,
  })
  @JoinColumn()
  public drivers!: TaskDriver[];

  @OneToMany(() => TaskTrailer, (taskTrailers) => taskTrailers.request, {
    nullable: true,
  })
  @JoinColumn()
  public trailers!: TaskTrailer[];

  @Column({ type: 'int', default: 0, nullable: true })
  public tonnage!: number;

  @OneToOne(() => RouteCost, { nullable: true })
  @JoinColumn()
  public routeCost!: RouteCost;

  @OneToMany(
    () => DriverExpenseRequest,
    (expenseRequest) => expenseRequest.taskRequest,
    { nullable: true },
  )
  public expenseRequests!: DriverExpenseRequest[];

  @ManyToMany(() => PaymentLoanRequest, { nullable: true })
  @JoinTable({ name: 'task_req_pay_loan_reqs' })
  public loanRequests!: PaymentLoanRequest[];

  @ManyToMany(() => PaymentRequest, { nullable: true })
  @JoinTable({ name: 'task_req_payment_reqs' })
  public paymentRequests!: PaymentRequest[];
}
