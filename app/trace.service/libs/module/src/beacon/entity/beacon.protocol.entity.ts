import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { TypeEntity } from '@/common/entity/base.type.entity';
import { File } from '@/module/file/entity/file.entity';

@Entity({ name: 'beacon_device_protocols' })
export class BeaconDeviceProtocol extends TypeEntity {
  @Column({ type: 'varchar', length: 128, nullable: false })
  public identifier: string;

  @OneToOne(() => File, { nullable: true })
  @JoinColumn()
  public file!: File;

  @Column({ nullable: true })
  public fileId!: string;
}
