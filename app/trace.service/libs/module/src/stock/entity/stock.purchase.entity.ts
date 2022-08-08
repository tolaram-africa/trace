import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity';
import { File } from '@/module/file/entity';
import { Shipment } from '@/module/shipment/entity';
import { StockPurchaseRequest } from './stock.purchase-request.entity';
import { User } from '@/module/user/entity';

@Entity({ name: 'stock_purchases' })
export class StockPurchase extends SoftDeleteEntity {
  @OneToOne(() => User)
  @JoinColumn()
  public payedBy: User;

  @Column({ nullable: true })
  public payedById!: string;

  @OneToOne(() => StockPurchaseRequest)
  @JoinColumn()
  public request: StockPurchaseRequest;

  @Column({ nullable: true })
  public requestId!: string;

  @OneToOne(() => Shipment)
  @JoinColumn()
  public shipment: Shipment;

  @Column({ nullable: true })
  public shipmentId!: string;

  @Column({ type: 'text', nullable: true })
  public notes: string;

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'stock_purchase_files' })
  public files!: File[];
}
