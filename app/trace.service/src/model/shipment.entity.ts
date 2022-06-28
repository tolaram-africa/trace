import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { SoftDeleteEntity } from './base.soft-delete.entity';
import { ShipmentProvider } from './shipment.provider.entity';
import { Document } from './document.entity';

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

  @ManyToMany(() => Document, { nullable: true })
  @JoinTable({ name: 'shipment_documents' })
  public docs: Document[];
}
