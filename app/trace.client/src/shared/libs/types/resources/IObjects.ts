export interface IStatusTypes {
  name: string
  color: string
  count: number
}

export interface Attributes {
  ignition: boolean
  battery: number
}

export interface Event {
  id?: string
  type?: string
  status?: string
  startTime?: string
  endTime?: null
}

export interface Position {
  latitude?: number
  longitude?: number
  time?: string
  address?: string
  speed?: number
  course?: number
  attributes?: Attributes
}

export interface Task {
  id?: string
  type?: string
  status?: null | string
  startTime?: string
  deliveryEstimate?: null | string
  source?: null | string
  destination?: null | string
  customer?: null | string
}

export interface IObject {
  uniqueId: string
  lastUpdated: string
  vehicleNumber: string
  tags: string[]
  status: string
  position: Position
  geofences: string[]
  task: Task
  event: Event
}
