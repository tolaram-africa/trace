import { Column, Entity } from 'typeorm';
import { BaseTypeEntity } from './base.type.entity';
import { TaskType } from './enum.task';

@Entity({ name: 'task_event_types' })
export class TaskEventType extends BaseTypeEntity {
  @Column({
    type: 'enum',
    enum: TaskType,
    array: true,
    default: [TaskType.TRIP],
  })
  public types: TaskType[];

  @Column({ default: true })
  public available: boolean;
}
