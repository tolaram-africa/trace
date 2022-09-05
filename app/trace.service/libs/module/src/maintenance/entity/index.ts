export * from './maintenance.entity';
export * from './maintenance.repair-types.entity';
export * from './maintenance.repair.entity';
export * from './maintenance.request-issue.entity';
export * from './maintenance.request-log.entity';
export * from './maintenance.request.entity';
export * from './maintenance.type.entity';

import {
  Maintenance,
  MaintenanceType,
  MaintenanceRepairType,
  MaintenanceRepair,
  MaintenanceRequestIssue,
  MaintenanceRequestLog,
  MaintenanceRequest,
} from './';

export const MaintenanceModuleEntity = [
  Maintenance,
  MaintenanceType,
  MaintenanceRepairType,
  MaintenanceRepair,
  MaintenanceRequestIssue,
  MaintenanceRequestLog,
  MaintenanceRequest,
];