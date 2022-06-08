import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { ScheduleRecur } from './schedule.recur.entity';

@Entity({ name: 'schedules' })
export class Schedule extends BaseTaggedEntity {
  @Column({ default: false })
  public recurring: boolean;

  @Column({ default: false })
  public active: boolean;

  @Column({ default: false })
  public restrict: boolean;

  @Column()
  public name: string;

  @Column({ type: 'text' })
  public description: string;

  @Column({ type: 'timestamptz', nullable: true })
  public excecuted: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public next: Date;

  @ManyToMany(() => ScheduleRecur)
  @JoinTable()
  public schedules: ScheduleRecur[];
}
