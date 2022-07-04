export * from './task.base.object-state.entity';
export * from './task.destination.entity';
export * from './task.driver.entity';
export * from './task.entity';
export * from './task.event-status-type.entity';
export * from './task.event-type.entity';
export * from './task.event.entity';
export * from './task.request.entity';
export * from './task.route.entity';
export * from './task.trailer.entity';
export * from './task.vehicle.entity';

import {
  TaskDestination,
  TaskDriver,
  TaskVehicle,
  TaskTrailer,
  TaskEventStatusType,
  TaskEventType,
  TaskEvent,
  TaskRequest,
  TaskRoute,
  Task,
} from './';

export const TaskModuleEntity = [
  TaskDestination,
  TaskDriver,
  TaskVehicle,
  TaskTrailer,
  TaskEventStatusType,
  TaskEventType,
  TaskEvent,
  TaskRequest,
  TaskRoute,
  Task,
];
