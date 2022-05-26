import { IEvent } from '../Event/IEvent';
import { IPosition } from '../Position';
import { ITask } from './Task';

export interface ITaskSate {
  uniqueId: string;
  lastUpdated: string;
  vehicleNumber: string;
  tags: string[];
  status: string;
  position: IPosition;
  geofences: string[];
  task: ITask;
  event: IEvent;
}

export interface ITaskSateTypes {
  name: string;
  color: string;
  count: number;
}
