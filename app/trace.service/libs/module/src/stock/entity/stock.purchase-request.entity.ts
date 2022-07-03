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
import { File } from '@root/libs/module/src/file/entity/file.entity';
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

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'stock_purchase_req_files' })
  public files!: File[];
}
