import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { Schedule } from '@/module/schedule/entity/schedule.entity';
import { Vehicle } from '@/module/asset/entity/asset.vehicle.entity';
import { Trailer } from '@/module/asset/entity/asset.trailer.entity';
import { MaintenanceType } from './maintenance.type.entity';

@Entity({ name: 'maintenance_requests' })
export class MaintenanceRequest extends SoftDeleteEntity {
  @Column({ default: false })
  public scheduled: boolean;

  @Column({ default: false })
  public archived: boolean;

  @Column({ default: false })
  public allVehicle: boolean;

  @Column({ default: false })
  public allTrailer: boolean;

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
