import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Driver } from '@/module/driver/entity/driver.entity';
import { TaskObjectState } from './task.base.object-state.entity';
import { TaskRequest } from './task.request.entity';

@Entity({ name: 'task_drivers' })
export class TaskDriver extends TaskObjectState {
  @OneToOne(() => Driver)
  @JoinColumn()
  public driver: Driver;

  @Column({ nullable: true })
  public driverId!: string;

  @ManyToOne(() => TaskRequest, (request) => request.drivers)
  @JoinColumn()
  public request: TaskRequest;

  @Column({ nullable: true })
  public requestId!: string;
}
