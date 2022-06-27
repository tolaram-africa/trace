import { Column } from 'typeorm';
import { BaseEntity } from './base.entity';
import { TaskObjectStatus } from './enum.task';

export abstract class BaseTaskObjectState extends BaseEntity {
  @Column({
    type: 'timestamptz',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  public timeAssigned: Date;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public timeCompleted!: Date;

  @Column({
    type: 'enum',
    enum: TaskObjectStatus,
    default: TaskObjectStatus.PENDING,
  })
  public completionStatus: TaskObjectStatus;
}
