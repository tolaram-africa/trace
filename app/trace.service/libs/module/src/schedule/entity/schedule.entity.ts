import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { CoreDeleteEntity } from '@/common/entity/base.core.soft-delete.entity';
import { ScheduleEvent } from './schedule.event.entity';

@Entity({ name: 'schedules' })
export class Schedule extends CoreDeleteEntity {
  @Column({ default: false })
  public default: boolean;

  @Column({ default: false })
  public active: boolean;

  @Column({ default: false })
  public restrict: boolean;

  @Column({ default: false })
  public recurring: boolean;

  @Column({ type: 'varchar', length: 128 })
  public name: string;

  @Column({ type: 'text', nullable: true })
  public description!: string;

  @Column({ type: 'timestamptz', nullable: true })
  public lastRun: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public next: Date;

  @OneToMany(() => ScheduleEvent, (event) => event.schedule, { nullable: true })
  @JoinColumn()
  public events!: ScheduleEvent[];
}
