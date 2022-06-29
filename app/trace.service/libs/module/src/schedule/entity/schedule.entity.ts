import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { CoreDeleteEntity } from '@/common/entity/base.core.soft-delete.entity';
import { ScheduleRecur } from './schedule.recur.entity';
import { Tag } from '@/module/tag/entity/tag.entity';

@Entity({ name: 'schedules' })
export class Schedule extends CoreDeleteEntity {
  @Column({ default: false })
  public recurring: boolean;

  @Column({ default: false })
  public active: boolean;

  @Column({ default: false })
  public restrict: boolean;

  @Column()
  public name: string;

  @Column({ type: 'text', nullable: true })
  public description!: string;

  @Column({ type: 'timestamptz', nullable: true })
  public excecuted: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public next: Date;

  @ManyToMany(() => ScheduleRecur)
  @JoinTable({ name: 'recurring_schedules' })
  public schedules: ScheduleRecur[];

  @ManyToMany(() => Tag)
  @JoinTable({ name: 'schedule_tags' })
  public tag!: Tag[];
}
