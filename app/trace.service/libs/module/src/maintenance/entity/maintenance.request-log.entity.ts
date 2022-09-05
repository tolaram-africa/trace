import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { User } from '@/module/user/entity/user.entity';
import { File } from '@/module/file/entity/file.entity';
import { MaintenanceRequestIssue } from './maintenance.request-issue.entity';
import { MaintenanceRequest } from './maintenance.request.entity';
import { Vehicle } from '@/module/asset/entity/asset.vehicle.entity';
import { Trailer } from '@/module/asset/entity/asset.trailer.entity';

@Entity({ name: 'maintenance_req_logs' })
export class MaintenanceRequestLog extends SoftDeleteEntity {
  @OneToOne(() => MaintenanceRequest)
  @JoinColumn()
  public request: MaintenanceRequest;

  @Column({ nullable: true })
  public requestId!: string;

  @OneToMany(() => MaintenanceRequestIssue, (issue) => issue.requestLog, {
    nullable: true,
  })
  @JoinColumn()
  public issues!: MaintenanceRequestIssue[];

  @OneToOne(() => Vehicle, { nullable: true })
  @JoinColumn()
  public vehicle!: Vehicle;

  @Column({ nullable: true })
  public vehicleId!: string;

  @OneToOne(() => Trailer, { nullable: true })
  @JoinColumn()
  public trailer!: Trailer;

  @Column({ nullable: true })
  public trailerId!: string;

  @Column({ type: 'int' })
  public expectedCost!: number;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public appeovedBy!: User;

  @Column({ nullable: true })
  public appeovedById!: string;

  @Column({ type: 'timestamptz', nullable: true })
  public appeovedTime!: Date;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public assignedTo!: User;

  @Column({ nullable: true })
  public assignedToId!: string;

  @Column({ type: 'text', nullable: true })
  public notes!: string;

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'maintenance_req_log_files' })
  public files!: File[];
}