import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToOne,
  RelationId,
} from 'typeorm';
import { FuelCalculationType } from '@/common/entity/enum.base';
import { BeaconPosition } from './beacon.position.entity';
import { TenantEntity } from '@/common/entity/base.tenant.entity';
import { BeaconDevice } from '@/module/asset/entity/asset.beacon.entity';

export enum BeaconStatus {
  OFFLINE = 'offline',
  MOVING = 'moving',
  PARKED = 'parked',
  IDLING = 'idling',
}

@Entity({ name: 'beacons' })
export class Beacon extends TenantEntity {
  @Column({ type: 'varchar', length: 128 })
  public name: string;

  @Column({ default: false })
  public disabled!: boolean;

  @Column({ type: 'date', nullable: true })
  public expiry!: Date;

  @Generated('increment')
  public identifier!: number;

  @ManyToOne(() => BeaconPosition, (beaconPosition) => beaconPosition.beacon, {
    nullable: true,
  })
  @JoinColumn()
  public position: BeaconPosition;

  @RelationId((beacon: Beacon) => beacon.position)
  public positionId!: string;

  @OneToOne(() => BeaconDevice, (beaconDevice) => beaconDevice.beacon, {
    nullable: true,
  })
  @JoinColumn()
  public device!: BeaconDevice;

  @Column({ nullable: true })
  public deviceId!: string;

  @Column({ type: 'enum', enum: BeaconStatus, default: BeaconStatus.OFFLINE })
  public status: BeaconStatus;

  @Column({ type: 'varchar', length: 1024 })
  public icon: string;

  @Column({
    type: 'enum',
    enum: FuelCalculationType,
    default: FuelCalculationType.DISABLED,
  })
  public fuelOption: FuelCalculationType;

  @Column({ type: 'decimal', default: 0 })
  public fuelDistanceValue!: number;

  @Column({ type: 'float', nullable: true })
  public accumulatedDistance: number;

  @Column({ type: 'float', nullable: true })
  public accumulatedHour: number;

  @Column({ type: 'text', nullable: true })
  public description!: string;

  @Column({ type: 'jsonb', nullable: true })
  public attributes: string;
}