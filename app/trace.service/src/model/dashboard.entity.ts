import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { SoftDeleteEntity } from './base.timed.entity';
import { User } from './user.entity';
import { SystemFeature } from './system.module.entity';

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

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public user!: User;

  @Column({ type: 'enum', enum: DashboardType, default: DashboardType.COUNT })
  public type: DashboardType;

  @OneToOne(() => SystemFeature)
  @JoinColumn()
  public module: SystemFeature;

  @Column({ nullable: false, type: 'int', default: 0 })
  public position: number;

  @Column({ nullable: true, type: 'text' })
  public description!: string;
}
