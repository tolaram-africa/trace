import { Column, Entity } from 'typeorm';
import { ExtendedAddress } from '@/common/entity/base.address.entity';
import { TenantEntity } from '@/common/entity/base.tenant.entity';

export enum ShipmentAPI {
  UPS = 'ups',
  USPS = 'usps',
  FEDEX = 'fedex',
  DHL = 'dhl',
  TNT = 'tnt',
  NIPOST = 'nipost',
  SPEEDAF = 'speedaf',
  OTHER = 'other',
  CUSTOM = 'custom',
  NONE = 'none',
}

@Entity({ name: 'shipment_providers' })
export class ShipmentProvider extends TenantEntity {
  @Column({ type: 'varchar', length: 128, nullable: false })
  public name: string;

  @Column({ type: 'enum', enum: ShipmentAPI, default: ShipmentAPI.NONE })
  public api: ShipmentAPI;

  @Column({ type: 'varchar', length: 1024, nullable: true })
  public url!: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public accountId!: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public apiToken!: string;

  @Column(() => ExtendedAddress)
  public address: ExtendedAddress;

  @Column({ type: 'text', nullable: true })
  public notes: string;
}
