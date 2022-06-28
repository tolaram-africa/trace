import { OneToOne, JoinColumn, Column, Entity, ManyToOne } from 'typeorm';
import { TenantEntity } from './base.entity';
import { Location } from './location.entity';
import { Document } from './document.entity';
import { TaskRequest } from './task.request.entity';

enum DestinationType {
  REST_POINT = 'rest_point',
  DROP_POINT = 'drop_point',
}

@Entity({ name: 'task_destinations' })
export class TaskDestination extends TenantEntity {
  @ManyToOne(() => TaskRequest, (request) => request.destinations)
  @JoinColumn()
  public taskRequest: TaskRequest;

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

  @OneToOne(() => Document, { nullable: true })
  public document!: Document;

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
