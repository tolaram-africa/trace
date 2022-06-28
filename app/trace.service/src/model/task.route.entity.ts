import { LineString } from 'geojson';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { TenantEntity } from '@/common/entity/base.tenant.entity';
import { GeometryTransformer } from '@/common/entity/base.util';
import { Location } from './location.entity';
import { TaskRequest } from './task.request.entity';

@Entity({ name: 'task_routes' })
export class TaskRoute extends TenantEntity {
  @OneToOne(() => TaskRequest, (request) => request.route)
  @JoinColumn()
  public request: TaskRequest;

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
  @JoinTable()
  public stops!: Location[];
}
