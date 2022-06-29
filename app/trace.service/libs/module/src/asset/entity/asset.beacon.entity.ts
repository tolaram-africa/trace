import { Column, OneToOne, JoinColumn, Entity } from 'typeorm';
import { TenantEntity } from '@/common/entity/base.tenant.entity';
import { Beacon } from '@/module/beacon/entity/beacon.entity';
import { NetworkCard } from '@/module/network-card/entity/network-card.entity';
import { BeaconDeviceModel } from '@/module/beacon/entity/beacon.model.entity';
import { StockOutRequest } from '@/module/stock/entity/stock.out-request.entity';

export enum BeaconDeviceStatus {
  ASSIGNED = 'assigned',
  UNASSINGED = 'unassigned',
  DAMAGED = 'damaged',
  LOST = 'lost',
  UNKNOWN = 'unknown',
}

@Entity({ name: 'beacon_devices' })
export class BeaconDevice extends TenantEntity {
  @Column({
    type: 'enum',
    enum: BeaconDeviceStatus,
    default: BeaconDeviceStatus.UNASSINGED,
  })
  public status: BeaconDeviceStatus;

  @Column({ type: 'varchar', length: 128, nullable: false })
  public uniqueId: string;

  @OneToOne(() => Beacon, (beacon) => beacon.device, { nullable: true })
  @JoinColumn()
  public beacon!: Beacon;

  @OneToOne(() => StockOutRequest, { nullable: true })
  @JoinColumn()
  public assetRequest!: StockOutRequest;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public lastUpdate!: Date;

  @OneToOne(() => BeaconDeviceModel)
  @JoinColumn()
  public model: BeaconDeviceModel;

  @Column()
  public color: string;

  @Column({ type: 'text', nullable: true })
  public picture: string;

  @Column({ type: 'timestamptz', nullable: true })
  public deployed!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public decommissioned!: Date;

  @Column({ type: 'varchar', length: 50 })
  public serialNumber: string;

  @Column({ type: 'jsonb', nullable: true })
  public attributes: string;

  @OneToOne(() => NetworkCard, { nullable: true })
  @JoinColumn()
  public networkCard!: NetworkCard;
}
