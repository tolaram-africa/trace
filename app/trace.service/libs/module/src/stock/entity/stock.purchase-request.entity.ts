import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { Supplier } from '@/module/supplier/entity/supplier.entity';
import { User } from '@/module/user/entity/user.entity';
import { File } from '@/module/file/entity/file.entity';
import { StockWarehouse } from './stock.warehouse.entity';
import { StockPurchaseItem } from './stock.purchase-item.entity';

@Entity({ name: 'stock_purchase_reqs' })
export class StockPurchaseRequest extends TagEntity {
  @OneToOne(() => Supplier)
  @JoinColumn()
  public supplier: Supplier;

  @Column({ nullable: true })
  public supplierId!: string;

  @OneToOne(() => StockWarehouse)
  @JoinColumn()
  public warehouse: StockWarehouse;

  @Column({ nullable: true })
  public warehouseId!: string;

  @OneToMany(() => StockPurchaseItem, (item) => item.request, {
    nullable: true,
  })
  @JoinColumn()
  public items!: StockPurchaseItem[];

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public requestedBy!: User;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @Column({ type: 'text', nullable: true })
  public notes: string;

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'stock_purchase_req_files' })
  public files!: File[];
}
