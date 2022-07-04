import { Column, OneToOne, JoinColumn, Entity } from 'typeorm';
import { TenantEntity } from '@/common/entity/base.tenant.entity';
import { Beacon } from '@/module/beacon/entity/beacon.entity';
import { NetworkCard } from '@/module/network-card/entity/network-card.entity';
import { BeaconDeviceModel } from '@/module/beacon/entity/beacon.model.entity';
import { StockOutRequest } from '@/module/stock/entity/stock.out-request.entity';
import { File } from '@/module/file/entity/file.entity';

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

  @Column({ nullable: true })
  public beaconId!: string;

  @OneToOne(() => StockOutRequest, { nullable: true })
  @JoinColumn()
  public stock!: StockOutRequest;

  @Column({ nullable: true })
  public stockId!: string;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public lastUpdate!: Date;

  @OneToOne(() => BeaconDeviceModel)
  @JoinColumn()
  public model: BeaconDeviceModel;

  @Column({ nullable: true })
  public modelId!: string;

  @Column()
  public color: string;

  @OneToOne(() => File, { nullable: true })
  @JoinColumn()
  public image: File;

  @Column({ nullable: true })
  public imageId!: string;

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

  @Column({ nullable: true })
  public networkCardId!: string;
}
