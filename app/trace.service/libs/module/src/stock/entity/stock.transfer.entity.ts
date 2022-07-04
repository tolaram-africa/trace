import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity';
import { StockChange } from './stock.change.entity';
import { StockWarehouse } from './stock.warehouse.entity';
import { File } from '@/module/file/entity';
import { User } from '@/module/user/entity';
import { Shipment } from '@/module/shipment/entity';

@Entity({ name: 'stock_transfers' })
export class StockTransfer extends SoftDeleteEntity {
  @OneToOne(() => StockWarehouse)
  @JoinColumn()
  public from: StockWarehouse;

  @Column({ nullable: true })
  public fromId!: string;

  @OneToOne(() => StockWarehouse)
  @JoinColumn()
  public to: StockWarehouse;

  @Column({ nullable: true })
  public toId!: string;

  @OneToOne(() => Shipment)
  @JoinColumn()
  public shipment: Shipment;

  @Column({ nullable: true })
  public shipmentId!: string;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public sentBy!: User;

  @Column({ nullable: true })
  public sentById!: string;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public receivedBy!: User;

  @Column({ nullable: true })
  public receivedById!: string;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @Column({ nullable: true })
  public approvedById!: string;

  @OneToMany(() => StockChange, (stockChange) => stockChange.stockTransfer, {
    nullable: false,
  })
  @JoinColumn()
  public changes: StockChange[];

  @Column({ type: 'text', nullable: true })
  public notes: string;

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'stock_transfer_files' })
  public files!: File[];
}
