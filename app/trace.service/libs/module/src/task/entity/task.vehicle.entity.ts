import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Vehicle } from '@/module/asset/entity/asset.vehicle.entity';
import { TaskObjectState } from './task.base.object-state.entity';
import { TaskRequest } from './task.request.entity';

@Entity({ name: 'task_vehicles' })
export class TaskVehicle extends TaskObjectState {
  @OneToOne(() => Vehicle)
  @JoinColumn()
  public driver: Vehicle;

  @Column({ nullable: true })
  public driverId!: string;

  @ManyToOne(() => TaskRequest, (request) => request.vehicles)
  @JoinColumn()
  public request: TaskRequest;

  @Column({ nullable: true })
  public requestId!: string;
}
