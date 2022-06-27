import { Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Trailer } from './object.trailer.entity';
import { BaseTaskObjectState } from './task.base.object-state.entity';
import { TaskRequest } from './task.request.entity';

@Entity({ name: 'task_trailers' })
export class TaskTrailer extends BaseTaskObjectState {
  @OneToOne(() => Trailer)
  @JoinColumn()
  public driver: Trailer;

  @ManyToOne(() => TaskRequest, (request) => request.trailers)
  @JoinColumn()
  public request: TaskRequest;
}
