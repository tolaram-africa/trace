import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { TenantEntity } from '@/common/entity/base.tenant.entity';
import { Beacon } from './beacon.entity';
import { BeaconPosition } from './beacon.position.entity';
import { Location } from '@/module/location/entity/location.entity';
import { Tenant } from '@/module/tenant/entity/tenant.entity';

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

  @Column({ nullable: true })
  public beaconId!: string;

  @OneToOne(() => BeaconPosition, { nullable: true })
  @JoinColumn()
  public position!: BeaconPosition;

  @Column({ nullable: true })
  public positionId!: string;

  @OneToOne(() => Location, { nullable: true })
  @JoinColumn()
  public location!: Location;

  @Column({ nullable: true })
  public locationId!: string;

  @Column({ type: 'jsonb', nullable: true })
  public attributes: string;
}
