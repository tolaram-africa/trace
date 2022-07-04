import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { TenantEntity } from '@/common/entity/base.tenant.entity';
import { LineString } from 'geojson';
import { GeometryTransformer } from '@/common/entity/base.util';
import { Location } from '@/module/location/entity/location.entity';
import { TaskRequest } from './task.request.entity';

@Entity({ name: 'task_routes' })
export class TaskRoute extends TenantEntity {
  @OneToOne(() => TaskRequest, (request) => request.route)
  @JoinColumn()
  public request: TaskRequest;

  @Column({ nullable: true })
  public requestId!: string;

  @OneToOne(() => Location, { nullable: false })
  @JoinColumn()
  public source: Location;

  @Column({ nullable: true })
  public sourceId!: string;

  @OneToOne(() => Location, { nullable: false })
  @JoinColumn()
  public destination: Location;

  @Column({ nullable: true })
  public destinationId!: string;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'LineString',
    transformer: new GeometryTransformer(),
    nullable: false,
  })
  public polyline: LineString;

  @ManyToMany(() => Location, { nullable: true })
  @JoinTable()
  public stops!: Location[];
}
