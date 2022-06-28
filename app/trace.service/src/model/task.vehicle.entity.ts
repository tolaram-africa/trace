import { Vehicle } from './object.vehicle.entity';
import { Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { TaskObjectState } from './task.base.object-state.entity';
import { TaskRequest } from './task.request.entity';

@Entity({ name: 'task_vehicles' })
export class TaskVehicle extends TaskObjectState {
  @OneToOne(() => Vehicle)
  @JoinColumn()
  public driver: Vehicle;

  @ManyToOne(() => TaskRequest, (request) => request.vehicles)
  @JoinColumn()
  public request: TaskRequest;
}
