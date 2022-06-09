import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { Schedule } from './schedule.entity';
import { User } from './user.entity';
import { Location } from './location.entity';
import { LineString } from 'geojson';
import { GeometryTransformer } from './base.util';
import { Max } from 'class-validator';

@Entity({ name: 'routes' })
export class Route extends BaseTaggedEntity {
  @Column({ default: false })
  public default: boolean;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;

  @OneToOne(() => Location)
  @JoinColumn()
  public source: Location;

  @OneToOne(() => Location)
  @JoinColumn()
  public destination: Location;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'LineString',
    transformer: new GeometryTransformer(),
    nullable: false,
  })
  public polyline: LineString;

  @ManyToMany(() => Location)
  @JoinTable({ name: 'route_locations' })
  public stops!: Location[];

  @Column({ type: 'varchar', length: 10, default: '#ff00fe' })
  public color: string;

  @Column({ type: 'int', nullable: true })
  @Max(300)
  public speedLimit!: number;

  @Column({ type: 'interval', nullable: true })
  public restPeriod!: number;

  @Column({ type: 'interval', nullable: true })
  public tolerancePeriod!: number;

  @Column({ type: 'int', default: 100 })
  @Max(100)
  public completedPercentage: number;

  @ManyToMany(() => Schedule)
  @JoinTable({ name: 'route_schedules' })
  public schedules!: Schedule[];
}
