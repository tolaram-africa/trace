import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { TypeEntity } from '@/common/entity/base.type.entity';
import { TaskEventType } from './task.event-type.entity';

@Entity({ name: 'task_event_status_types' })
export class TaskEventStatusType extends TypeEntity {
  @OneToOne(() => TaskEventType, { nullable: false })
  @JoinColumn()
  public type: TaskEventType;

  @Column({ default: true })
  public available: boolean;
}
