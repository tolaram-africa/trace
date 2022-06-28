import { BaseTimedEntity } from './base.timed.entity';
import { Schedule } from './schedule.entity';
import { Vehicle } from './object.vehicle.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { Trailer } from './object.trailer.entity';
import { MaintenanceType } from './maintenance.type.entity';

@Entity({ name: 'maintenance_requests' })
export class MaintenanceRequest extends BaseTimedEntity {
  @Column({ default: false })
  public scheduled: boolean;

  @Column({ default: false })
  public archived: boolean;

  @Column({ default: false })
  public allVehicles: boolean;

  @Column({ default: false })
  public allTrailers: boolean;

  @ManyToMany(() => Vehicle, { nullable: true })
  @JoinTable({ name: 'maintenance_req_vehicles' })
  public vehicles!: Vehicle[];

  @ManyToMany(() => Trailer, { nullable: true })
  @JoinTable({ name: 'maintenance_req_trailers' })
  public trailers!: Trailer[];

  @ManyToMany(() => MaintenanceType, { nullable: true })
  @JoinTable({ name: 'maintenance_req_types' })
  public types: MaintenanceType[];

  @Column({ type: 'text', nullable: true })
  public notes: string;

  @Column({ default: false })
  public byOdometer!: boolean;

  @Column({ type: 'int', nullable: true })
  public odometerChange!: number;

  @ManyToMany(() => Schedule, { nullable: true })
  @JoinTable({ name: 'maintenance_req_schedules' })
  public schedule!: Schedule[];
}
