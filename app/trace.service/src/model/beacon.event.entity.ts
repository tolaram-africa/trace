import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { TenantEntity } from './base.tenant.entity';
import { Beacon } from './beacon.entity';
import { BeaconPosition } from './beacon.position.entity';
import { Location } from './location.entity';
import { Tenant } from './tenant.entity';

export enum BeaconEventType {
  ALARM = 'alarm',
  BEACON_OFFLINE = 'beacon_offline',
  BEACON_MOVING = 'beacon_moving',
  BEACON_PARKED = 'beacon_parked',
  BEACON_IDLING = 'beacon_idling',
  FUEL_DRAIN = 'fuel_drain',
  HARSH_ACCELERATION = 'harsh_acceleration',
  HARSH_BRAKING = 'harsh_braking',
  HARSH_CORNERING = 'harsh_cornering',
  HIGH_SPEED = 'high_speed',
  IGNITION_ON = 'ignition_on',
  IGNITION_OFF = 'ignition_off',
  UNDERSPEED = 'underspeed',
  ZONE_ENTER = 'zone_enter',
  ZONE_EXIT = 'zone_exit',
  ZONE_CROSS = 'zone_cross',
}

@Entity({ name: 'beacon_events' })
export class BeaconEvent extends TenantEntity {
  @OneToOne(() => Tenant, { nullable: true })
  @JoinColumn()
  public tenant!: Tenant;

  @Column({
    type: 'enum',
    enum: BeaconEventType,
    default: BeaconEventType.BEACON_OFFLINE,
  })
  public type: BeaconEventType;

  @Column({
    type: 'timestamptz',
    nullable: false,
  })
  public time: Date;

  @Column({
    type: 'timestamptz',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  public serverTime: Date;

  @OneToOne(() => Beacon, { nullable: false })
  @JoinColumn()
  public beacon: Beacon;

  @OneToOne(() => BeaconPosition, { nullable: true })
  @JoinColumn()
  public position: BeaconPosition;

  @OneToOne(() => Location, { nullable: true })
  @JoinColumn()
  public location: Location;

  @Column({ type: 'jsonb', nullable: true })
  public attributes: string;
}
