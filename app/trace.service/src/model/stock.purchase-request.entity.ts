import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TagEntity } from './base.tag.entity';
import { Supplier } from './supplier.entity';
import { User } from './user.entity';
import { Document } from './document.entity';
import { StockWarehouse } from './stock.warehouse.entity';
import { StockPurchaseItem } from './stock.purchase-item.entity';

@Entity({ name: 'stock_purchase_reqs' })
export class StockPurchaseRequest extends TagEntity {
  @OneToOne(() => Supplier)
  @JoinColumn()
  public supplier: Supplier;

  @OneToOne(() => StockWarehouse)
  @JoinColumn()
  public warehouse: StockWarehouse;

  @OneToMany(() => StockPurchaseItem, (item) => item.request, {
    nullable: true,
  })
  @JoinColumn()
  public items!: StockPurchaseItem[];

  @OneToOne(() => User)
  @JoinColumn()
  public requestedBy: User;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;

  @Column({ type: 'text', nullable: true })
  public notes: string;

  @ManyToMany(() => Document, { nullable: true })
  @JoinTable({ name: 'stock_purchase_req_docs' })
  public docs: Document[];
}
