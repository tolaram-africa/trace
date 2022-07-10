import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { Task } from './task.entity';
import { TaskEventStatusType } from './task.event-status-type.entity';
import { TaskEventType } from './task.event-type.entity';
import { File } from '@/module/file/entity/file.entity';

@Entity({ name: 'task_events' })
export class TaskEvent extends TagEntity {
  @ManyToOne(() => Task, (task) => task.events)
  @JoinColumn()
  public task: Task;

  @Column({ nullable: true })
  public taskId!: string;

  @OneToOne(() => TaskEventType)
  @JoinColumn()
  public type: TaskEventType;

  @Column({ nullable: true })
  public typeId!: string;

  @OneToOne(() => TaskEventStatusType)
  @JoinColumn()
  public status: TaskEventStatusType;

  @Column({ nullable: true })
  public statusId!: string;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public startedAt!: Date;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public endedAt!: Date;

  @OneToOne(() => File, { nullable: true })
  @JoinColumn()
  public file!: File;

  @Column({ nullable: true })
  public fileId!: string;
}
