import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  RelationId,
} from 'typeorm';
import { TenantEntity } from '@/common/entity/base.tenant.entity';
import { LineString } from '@trace/common';
import { Location } from '@/module/location/entity/location.entity';
import { TaskRequest } from './task.request.entity';

@Entity({ name: 'task_routes' })
export class TaskRoute extends TenantEntity {
  @OneToOne(() => TaskRequest, (request) => request.route, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  @JoinColumn()
  public request: TaskRequest;

  @RelationId((item: TaskRoute) => item.request)
  public requestId!: string;

  @OneToOne(() => Location, { nullable: false })
  @JoinColumn()
  public source: Location;

  @RelationId((item: TaskRoute) => item.source)
  @Column({ type: 'uuid', nullable: true })
  public sourceId!: string;

  @OneToOne(() => Location, { nullable: false })
  @JoinColumn()
  public destination: Location;

  @RelationId((item: TaskRoute) => item.destination)
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
  @JoinTable()
  public stops!: Location[];
}
