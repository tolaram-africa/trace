import { Column, Entity } from 'typeorm';
import { TypeEntity } from '@/common/entity/base.type.entity';
import { TaskType } from '@/common/entity/enum.task';

@Entity({ name: 'task_event_types' })
export class TaskEventType extends TypeEntity {
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
