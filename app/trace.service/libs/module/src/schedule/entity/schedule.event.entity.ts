import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TenantEntity } from '@/common/entity/base.tenant.entity';
import { PeriodUnit } from '@/common/entity/enum.base';
import { Schedule } from './schedule.entity';

@Entity({ name: 'schedule_events' })
export class ScheduleEvent extends TenantEntity {
  @Index('idx_schedule_events_scheduleid')
  @ManyToOne(() => Schedule, (item) => item.events)
  @JoinColumn()
  public schedule: Schedule;

  @Column({ nullable: true })
  public scheduleId: string;

  @Column({ type: 'enum', enum: PeriodUnit, default: PeriodUnit.HOUR })
  public unit: PeriodUnit;

  @Column({ default: 1 })
  public interval!: number;

  @Column({ default: 0 })
  public maxRepeat!: number;

  @Column({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  public startAt!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public endAt!: Date;

  @Column({ nullable: true, default: '0 * * * *' })
  public cron!: string;
}
