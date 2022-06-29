import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { TypeEntity } from '@/common/entity/base.type.entity';
import { Document } from '@/module/document/entity/document.entity';

@Entity({ name: 'beacon_device_protocols' })
export class BeaconDeviceProtocol extends TypeEntity {
  @Column({ type: 'varchar', length: 128, nullable: false })
  public identifier: string;

  @OneToOne(() => Document, { nullable: true })
  @JoinColumn()
  public document!: Document;
}
