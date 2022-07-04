import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Trailer } from '@/module/asset/entity/asset.trailer.entity';
import { TaskObjectState } from './task.base.object-state.entity';
import { TaskRequest } from './task.request.entity';

@Entity({ name: 'task_trailers' })
export class TaskTrailer extends TaskObjectState {
  @OneToOne(() => Trailer)
  @JoinColumn()
  public driver: Trailer;

  @Column({ nullable: true })
  public driverId!: string;

  @ManyToOne(() => TaskRequest, (request) => request.trailers)
  @JoinColumn()
  public request: TaskRequest;

  @Column({ nullable: true })
  public requestId!: string;
}
