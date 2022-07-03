import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { User } from '@/module/user/entity/user.entity';
import { SystemFeature } from '@/module/system/entity/system.feature.entity';

export enum DashboardType {
  GRAPH = 'GRAPH',
  TABLE = 'TABLE',
  MAP = 'MAP',
  CHART = 'CHART',
  LIST = 'LIST',
  CARD = 'CARD',
  WIDGET = 'WIDGET',
  COUNT = 'COUNT',
  TIMELINE = 'TIMELINE',
}

@Entity({ name: 'dashboards' })
export class Dashboard extends SoftDeleteEntity {
  @Column({ default: false, type: 'boolean' })
  public default: boolean;

  @Index('idx_dashboard_userid')
  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public user!: User;

  @Column({ nullable: true })
  public userId!: string;

  @Column({ type: 'enum', enum: DashboardType, default: DashboardType.COUNT })
  public type: DashboardType;

  @Index('idx_dashboard_featureid')
  @OneToOne(() => SystemFeature, { nullable: true })
  @JoinColumn()
  public module!: SystemFeature;

  @Column({ nullable: true })
  public moduleId!: number;

  @Column({ nullable: false, type: 'int', default: 0 })
  public position: number;
}
