import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { TypeEntity } from '@/common/entity/base.type.entity';
import { BeaconDeviceProtocol } from './beacon.protocol.entity';
import { File } from '@/module/file/entity/file.entity';
import { ProductBrand } from '@/module/product/entity/product.brand.entity';

@Entity({ name: 'beacon_device_models' })
export class BeaconDeviceModel extends TypeEntity {
  @Column({ type: 'varchar', length: 25, nullable: true })
  public version: string;

  @OneToOne(() => ProductBrand)
  @JoinColumn()
  public manufacturer: ProductBrand;

  @Column({ nullable: true })
  public manufacturerId!: string;

  @OneToOne(() => BeaconDeviceProtocol)
  @JoinColumn()
  public protocol: BeaconDeviceProtocol;

  @Column({ nullable: true })
  public protocolId!: string;

  @OneToOne(() => File, { nullable: true })
  @JoinColumn()
  public file!: File;

  @Column({ nullable: true })
  public fileId!: string;
}
