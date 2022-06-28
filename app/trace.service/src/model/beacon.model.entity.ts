import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { TypeEntity } from '@/common/entity/base.type.entity';
import { BeaconDeviceProtocol } from './beacon.protocol.entity';
import { Document } from './document.entity';
import { ProductBrand } from './product.brand.entity';

@Entity({ name: 'beacon_device_models' })
export class BeaconDeviceModel extends TypeEntity {
  @Column({ type: 'varchar', length: 25, nullable: true })
  public version: string;

  @OneToOne(() => ProductBrand)
  @JoinColumn()
  public manufacturer: ProductBrand;

  @OneToOne(() => BeaconDeviceProtocol)
  @JoinColumn()
  public protocol: BeaconDeviceProtocol;

  @OneToOne(() => Document, { nullable: true })
  @JoinColumn()
  public document!: Document;
}
