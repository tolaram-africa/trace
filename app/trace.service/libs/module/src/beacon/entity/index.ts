export * from './beacon.command.entity';
export * from './beacon.entity';
export * from './beacon.event.entity';
export * from './beacon.message.entity';
export * from './beacon.model.entity';
export * from './beacon.position.entity';
export * from './beacon.protocol.entity';

import {
  Beacon,
  BeaconCommand,
  BeaconEvent,
  BeaconMessage,
  BeaconPosition,
  BeaconDeviceModel,
  BeaconDeviceProtocol,
} from './';

export const BeaconModuleEntity = [
  Beacon,
  BeaconCommand,
  BeaconEvent,
  BeaconMessage,
  BeaconPosition,
  BeaconDeviceModel,
  BeaconDeviceProtocol,
];
