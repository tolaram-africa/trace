import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { ShipmentProvider } from '@/module/shipment/entity/shipment.provider.entity';
import { File } from '@root/libs/module/src/file/entity/file.entity';

@Entity({ name: 'shipments' })
export class Shipment extends SoftDeleteEntity {
  @OneToOne(() => ShipmentProvider)
  @JoinColumn()
  public provider: ShipmentProvider;

  @Column({ default: false })
  public track: boolean;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public trackingNumber: string;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public completedAt!: Date;

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'shipment_files' })
  public files!: File[];
}
