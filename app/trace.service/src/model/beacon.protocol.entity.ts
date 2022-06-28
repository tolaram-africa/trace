import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { BaseTypeEntity } from './base.type.entity';
import { Document } from './document.entity';

@Entity({ name: 'beacon_device_protocols' })
export class BeaconDeviceProtocol extends BaseTypeEntity {
  @Column({ type: 'varchar', length: 128, nullable: false })
  public identifier: string;

  @OneToOne(() => Document, { nullable: true })
  @JoinColumn()
  public document!: Document;
}
