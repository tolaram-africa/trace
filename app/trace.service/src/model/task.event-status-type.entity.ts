import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseTypeEntity } from './base.type.entity';
import { TaskEventType } from './task.event-type.entity';

@Entity({ name: 'task_event_status_types' })
export class TaskEventStatusType extends BaseTypeEntity {
  @OneToOne(() => TaskEventType, { nullable: false })
  @JoinColumn()
  public type: TaskEventType;

  @Column({ default: true })
  public available: boolean;
}
