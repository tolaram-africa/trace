import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { TagEntity } from './base.tagged.entity';
import { Task } from './task.entity';
import { TaskEventStatusType } from './task.event-status-type.entity';
import { TaskEventType } from './task.event-type.entity';
import { Document } from './document.entity';

@Entity({ name: 'task_events' })
export class TaskEvent extends TagEntity {
  @ManyToOne(() => Task, (task) => task.events)
  @JoinColumn()
  public task: Task;

  public type: TaskEventType;

  @OneToOne(() => TaskEventStatusType)
  public status: TaskEventStatusType;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public startedAt: Date;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public endedAt: Date;

  @OneToOne(() => Document, { nullable: true })
  public document!: Document;
}
