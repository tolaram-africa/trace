export enum TaskType {
  TRIP = 'trip',
  EVENT = 'event',
  MAINTENANCE = 'maintenance',
  STOCK_TRANSFER = 'stock_transfer',
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

export enum TaskObjectStatus {
  PENDING = 'pending',
  TRANSFER = 'transfer',
  UNAVAILABLE = 'unavailable',
  CANCELLED = 'cancelled',
  FAILED = 'failed',
}
