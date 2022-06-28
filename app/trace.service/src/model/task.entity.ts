import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TagEntity } from './base.tag.entity';
import { TaskType } from './enum.task';
import { TaskEvent } from './task.event.entity';
import { TaskRequest } from './task.request.entity';
import { Document } from './document.entity';
import { Schedule } from './schedule.entity';
import { OrderRequest } from './order.request.entity';

@Entity({ name: 'tasks' })
export class Task extends TagEntity {
  @Generated()
  @Column({ unique: true })
  public identifier: number;

  @OneToOne(() => TaskRequest, (request) => request.task, { nullable: false })
  @JoinColumn()
  public request: TaskRequest;

  @OneToOne(() => OrderRequest, (request) => request.task, { nullable: true })
  @JoinColumn()
  public orderRequest!: OrderRequest;

  @Column({ type: 'enum', enum: TaskType, default: TaskType.TRIP })
  public taskType: TaskType;

  @OneToMany(() => TaskEvent, (event) => event.task, { nullable: true })
  @JoinColumn()
  public events!: TaskEvent[];

  @Column({ type: 'float', nullable: true, default: 80 })
  public speedLimit!: number;

  @Column({ type: 'float', nullable: true, default: 1 })
  public maxHourDivertCount: number;

  @Column({ type: 'float', nullable: true, default: 1 })
  public maxHourSpeedCount: number;

  @Column({ type: 'float', nullable: true, default: 0 })
  public restPeriod!: number;

  @Column({ type: 'float', nullable: true, default: 0 })
  public tolerancePeriod!: number;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public startedAt!: Date;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public departureTime!: Date;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public endedAt!: Date;

  @OneToOne(() => Document, { nullable: true })
  public document!: Document;

  @ManyToMany(() => Schedule, { nullable: true })
  @JoinTable({ name: 'task_schedules' })
  public schedule!: Schedule;

  // TODO: intialize order request and costing in code.
  // TODO: public form?: Form;
}
