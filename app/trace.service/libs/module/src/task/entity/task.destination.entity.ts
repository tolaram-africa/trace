import { OneToOne, JoinColumn, Column, Entity, ManyToOne } from 'typeorm';
import { TenantEntity } from '@/common/entity/base.tenant.entity';
import { Location } from '@/module/location/entity/location.entity';
import { File } from '@/module/file/entity/file.entity';
import { TaskRequest } from './task.request.entity';

enum DestinationType {
  REST_POINT = 'rest_point',
  DROP_POINT = 'drop_point',
}

@Entity({ name: 'task_destinations' })
export class TaskDestination extends TenantEntity {
  @ManyToOne(() => TaskRequest, (request) => request.destinations)
  @JoinColumn()
  public request: TaskRequest;

  @Column({ nullable: true })
  public requestId!: string;

  @Column({
    type: 'enum',
    enum: DestinationType,
    default: DestinationType.DROP_POINT,
  })
  public type: DestinationType;

  @Column({ type: 'int', nullable: false })
  public position: number;

  @OneToOne(() => Location, { nullable: false })
  @JoinColumn()
  public point: Location;

  @Column({ nullable: true })
  public pointId!: string;

  @OneToOne(() => File, { nullable: true })
  @JoinColumn()
  public file!: File;

  @Column({ nullable: true })
  public fileId!: string;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public arrivedAt!: Date;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public departedAt!: Date;
}
