import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { SoftDeleteEntity } from './base.soft-delete.entity';
import { Customer } from './customer.entity';
import { TaskEventType } from './task.event-type.entity';

@Entity({ name: 'cust_contracts' })
export class CustomerContract extends SoftDeleteEntity {
  @ManyToOne(() => Customer, (customer) => customer.contract, {
    nullable: true,
  })
  @JoinColumn()
  public customer: Customer;

  @Column({ nullable: false, unique: true, type: 'varchar', length: 128 })
  public code: string;

  @Column({ nullable: true, type: 'int' })
  public minDistance: number;

  @Column({ nullable: true, type: 'int' })
  public maxDistance: number;

  @Column({ nullable: true, type: 'date' })
  public minDuration: Date;

  @Column({ nullable: true, type: 'date' })
  public maxDuration: Date;

  @Column({ nullable: true, type: 'int' })
  public tonnage: number;

  @Column({ nullable: true, type: 'int' })
  public availabilityDayCount: number;

  @Column({ nullable: true, type: 'int' })
  public availabilityDayCost: number;

  @Column({ default: true, type: 'boolean' })
  public includeFuelCost: boolean;

  @Column({ default: true, type: 'boolean' })
  public includeSpareCost: boolean;

  @Column({ default: true, type: 'boolean' })
  public includeOtherExpense: boolean;

  @ManyToMany(() => TaskEventType)
  @JoinTable({ name: 'cust_contract_task_events' })
  public unavailableTaskEvents: TaskEventType[];
}
