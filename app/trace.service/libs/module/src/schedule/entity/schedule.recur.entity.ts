import { Column, Entity } from 'typeorm';
import { TenantEntity } from '@/common/entity/base.tenant.entity';
import { ReoccurUnit } from '@/common/entity/enum.base';

@Entity({ name: 're_schedule' })
export class ScheduleRecur extends TenantEntity {
  @Column({ type: 'enum', enum: ReoccurUnit, default: ReoccurUnit.DAY })
  public unit: ReoccurUnit;

  @Column({ default: 1 })
  public interval!: number;

  @Column({ type: 'timestamptz', nullable: true })
  public end!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public start!: Date;

  @Column({ default: 1 })
  public value!: number;
}
