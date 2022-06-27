import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseTypeEntity } from './base.type.entity';
import { Document } from './document.entity';
import { ProductBrand } from './product.brand.entity';

@Entity({ name: 'beacon_device_protocol' })
export class BeaconDeviceProtocol extends BaseTypeEntity {
  @Column({ type: 'varchar', length: 128, nullable: false })
  public identifier: string;

  @OneToOne(() => Document, { nullable: true })
  @JoinColumn()
  public document!: Document;
}

@Entity({ name: 'beacon_device_model' })
export class BeaconDeviceModel extends BaseTypeEntity {
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
