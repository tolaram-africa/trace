import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { Schedule } from './schedule.entity';
import { User } from './user.entity';
import { Location } from './location.entity';
import { LineString } from 'geojson';
import { GeometryTransformer } from '@/common/entity/base.util';
import { Max } from 'class-validator';

@Entity({ name: 'routes' })
export class Route extends TagEntity {
  @Column({ default: false })
  public default: boolean;

  @Column()
  public name: string;

  @Column({ type: 'text', nullable: true })
  public description!: string;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @Column({ default: false })
  public approved: boolean;

  @OneToOne(() => Location, { nullable: false })
  @JoinColumn()
  public source: Location;

  @OneToOne(() => Location, { nullable: false })
  @JoinColumn()
  public destination: Location;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'LineString',
    transformer: new GeometryTransformer(),
    nullable: false,
  })
  public polyline: LineString;

  @ManyToMany(() => Location, { nullable: true })
  @JoinTable({ name: 'route_locations' })
  public stops!: Location[];

  @Column({ type: 'varchar', length: 10, default: '#ff00fe' })
  public color: string;

  @Column({ type: 'int', nullable: true })
  @Max(300)
  public speedLimit!: number;

  @Column({
    type: 'bigint',
    default: 0,
    nullable: true,
  })
  public restDuration!: number;

  @Column({
    type: 'bigint',
    default: 0,
    nullable: true,
  })
  public toleranceDuration!: number;

  @Column({ type: 'int', default: 100, nullable: true })
  @Max(100)
  public completedPercentage!: number;

  @ManyToMany(() => Schedule, { nullable: true })
  @JoinTable({ name: 'route_schedules' })
  public schedules!: Schedule[];
}
