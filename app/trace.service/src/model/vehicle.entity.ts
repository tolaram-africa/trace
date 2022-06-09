import {
  Column,
  JoinColumn,
  OneToOne,
  ManyToMany,
  Entity,
  JoinTable,
} from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { Beacon } from './beacon.entity';
import { VehicleType } from './enum.vehicle';
import { Schedule } from './schedule.entity';
import { Document } from './document.entity';
import { Trailer } from './trailer.entity';

@Entity({ name: 'vehicles' })
export class Vehicle extends BaseTaggedEntity {
  @Column({ default: false })
  public active: boolean;

  @Column()
  public name: string;

  @Column()
  public registrationId: string;

  @Column()
  public fleetId!: string;

  @Column({ type: 'enum', enum: VehicleType, default: VehicleType.CAR })
  public type: VehicleType;

  @Column()
  public make: string;

  @Column()
  public capacity: number;

  @Column()
  public axleCapacity: number;

  @Column()
  public uniqueId: string;

  @Column()
  public tagId: string;

  @Column({ type: 'timestamptz', nullable: true })
  public deployed!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public decommissioned!: Date;

  @OneToOne(() => Beacon)
  @JoinColumn()
  public beacon!: Beacon;

  @ManyToMany(() => Document)
  @JoinTable({ name: 'vehicle_docs' })
  public docs!: Document[];

  @ManyToMany(() => Schedule)
  @JoinTable({ name: 'vehicle_schedules' })
  public schedules!: Schedule[];

  @OneToOne(() => Trailer)
  @JoinColumn()
  public activeTrailer!: Trailer;
}
