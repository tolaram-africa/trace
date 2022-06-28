import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { SoftDeleteEntity } from './base.soft-delete.entity';
import { StockWarehouse } from './stock.warehouse.entity';
import { Document } from './document.entity';
import { StockChange } from './stock.change.entity';
import { User } from './user.entity';
import { ProductModel } from './product.model.entity';

@Entity({ name: 'stock_out_requests' })
export class StockOutRequest extends SoftDeleteEntity {
  @OneToOne(() => StockWarehouse)
  @JoinColumn()
  public warehouse: StockWarehouse;

  @OneToOne(() => ProductModel)
  @JoinColumn()
  public product: ProductModel;

  @OneToOne(() => User)
  @JoinColumn()
  public requestedBy: User;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;

  @Column({ type: 'varchar', default: 128 })
  public requestedFor: string;

  @OneToMany(() => StockChange, (stockChange) => stockChange.stockOutRequest, {
    nullable: false,
  })
  @JoinColumn()
  public changes: StockChange[];

  @ManyToMany(() => Document, { nullable: true })
  @JoinTable({ name: 'stock_out_req_docs' })
  public docs: Document[];
}
