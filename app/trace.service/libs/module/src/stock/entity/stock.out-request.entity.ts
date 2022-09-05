import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { StockWarehouse } from './stock.warehouse.entity';
import { File } from '@/module/file/entity/file.entity';
import { StockChange } from './stock.change.entity';
import { User } from '@/module/user/entity/user.entity';
import { ProductModel } from '@/module/product/entity/product.model.entity';

@Entity({ name: 'stock_out_requests' })
export class StockOutRequest extends SoftDeleteEntity {
  @OneToOne(() => StockWarehouse)
  @JoinColumn()
  public warehouse: StockWarehouse;

  @Column({ nullable: true })
  public warehouseId!: string;

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

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'stock_out_req_files' })
  public files!: File[];
}