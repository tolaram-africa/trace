import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BaseTimedEntity } from './base.timed.entity';
import { User } from './user.entity';
import { Document } from './document.entity';
import { MaintenanceRequestIssue } from './maintenance.request-issue.entity';
import { MaintenanceRequest } from './maintenance.request.entity';
import { Vehicle } from './object.vehicle.entity';
import { Trailer } from './object.trailer.entity';

// TODO: Auto generate request logs

@Entity({ name: 'maintenance_req_logs' })
export class MaintenanceRequestLog extends BaseTimedEntity {
  @OneToOne(() => MaintenanceRequest)
  @JoinColumn()
  public request: MaintenanceRequest;

  @OneToMany(() => MaintenanceRequestIssue, (issue) => issue.requestLog, {
    nullable: true,
  })
  @JoinColumn()
  public issues!: MaintenanceRequestIssue[];

  @OneToOne(() => Vehicle, { nullable: true })
  @JoinColumn()
  public vehicle!: Vehicle;

  @OneToOne(() => Trailer)
  @JoinColumn()
  public trailer!: Trailer;

  @Column({ type: 'int' })
  public expectedCost!: number;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public appeovedBy!: User;

  @Column({ type: 'timestamptz', nullable: true })
  public appeovedTime!: Date;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public assignedTo!: User;

  @Column({ type: 'text', nullable: true })
  public notes!: string;

  @ManyToMany(() => Document, { nullable: true })
  @JoinTable({ name: 'maintenance_req_log_docs' })
  public docs!: Document[];
}
