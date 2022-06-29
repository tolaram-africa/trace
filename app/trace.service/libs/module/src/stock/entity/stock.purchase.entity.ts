import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { Document } from '@/module/document/entity/document.entity';
import { Shipment } from '@/module/shipment/entity/shipment.entity';
import { StockPurchaseRequest } from './stock.purchase-request.entity';
import { User } from '@/module/user/entity/user.entity';

@Entity({ name: 'stock_purchases' })
export class StockPurchase extends SoftDeleteEntity {
  @OneToOne(() => User)
  @JoinColumn()
  public payedBy: User;

  @OneToOne(() => StockPurchaseRequest)
  @JoinColumn()
  public request: StockPurchaseRequest;

  @OneToOne(() => Shipment)
  @JoinColumn()
  public shipment: Shipment;

  @Column({ type: 'text', nullable: true })
  public notes: string;

  @ManyToMany(() => Document, { nullable: true })
  @JoinTable({ name: 'stock_purchase_docs' })
  public docs: Document[];
}
