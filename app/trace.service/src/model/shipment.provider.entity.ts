import { Column, Entity } from 'typeorm';
import { BaseAddress } from './base.address.entity';
import { BaseEntity } from './base.entity';

export enum ShipmentAPI {
  UPS = 'ups',
  USPS = 'usps',
  FEDEX = 'fedex',
  DHL = 'dhl',
  TNT = 'tnt',
  NIPOST = 'nipost',
  SPEEDAF = 'speedaf',
  OTHER = 'other',
  NONE = 'none',
}

@Entity({ name: 'shipment_providers' })
export class ShipmentProvider extends BaseEntity {
  @Column({ type: 'varchar', length: 128, nullable: false })
  public name: string;

  public api: ShipmentAPI;

  @Column({ type: 'varchar', length: 1024, nullable: true })
  public url: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public accountId!: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public token!: string;

  @Column(() => BaseAddress)
  public address: BaseAddress;

  @Column({ type: 'text', nullable: true })
  public notes: string;
}
