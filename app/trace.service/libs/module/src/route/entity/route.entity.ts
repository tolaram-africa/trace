import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  ManyToMany,
  JoinTable,
  RelationId,
} from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { Schedule } from '@/module/schedule/entity/schedule.entity';
import { User } from '@/module/user/entity/user.entity';
import { Location } from '@/module/location/entity/location.entity';
import { LineString } from '@trace/common';

@Entity({ name: 'routes' })
export class Route extends TagEntity {
  @Column({ default: false })
  public default: boolean;

  @Column({ type: 'varchar', length: 128 })
  public name: string;

  @Column({ type: 'text', nullable: true })
  public description!: string;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @Column({ nullable: true })
  public approvedById!: string;

  @Column({ default: false })
  public approved: boolean;

  @OneToOne(() => Location, { nullable: false })
  @JoinColumn()
  public source: Location;

  @RelationId((item: Route) => item.source)
  @Column({ type: 'uuid', nullable: true })
  public sourceId!: string;

  @OneToOne(() => Location, { nullable: false })
  @JoinColumn()
  public destination: Location;

  @RelationId((item: Route) => item.destination)
  @Column({ type: 'uuid', nullable: true })
  public destinationId!: string;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'LineString',
    srid: 4326,
    nullable: false,
  })
  public polyline: LineString;

  @ManyToMany(() => Location, { nullable: true })
  @JoinTable({ name: 'route_locations' })
  public stops!: Location[];

  @Column({ type: 'varchar', length: 10, default: '#ff00fe' })
  public color: string;

  @Column({ type: 'int', nullable: true })
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
  public completedPercentage!: number;

  @ManyToMany(() => Schedule, { nullable: true })
  @JoinTable({ name: 'route_schedules' })
  public schedules!: Schedule[];
}
