export enum TaskType {
  TRIP,
  TASK,
  BOTH,
}

export enum TripType {
  QUICK,
  NORMAL,
  FULL,
}

export enum TaskStatusItem {
  CANCELLED = 'cancelled',
  PENDING = 'pendig',
  DELAYED = 'delayed',
  TRANSIT = 'transit',
  LATE = 'late',
  DIVERTED = 'diverted',
  EARLY = 'early',
  ARRIVED = 'arrived',
  FAILED = 'failed',
  COMPLETED = 'completed',
}

export enum BeaconStatusItem {
  OFFLINE = 'offline',
  PARKED = 'parked',
  MOVING = 'moving',
  IDLING = 'idling',
}
