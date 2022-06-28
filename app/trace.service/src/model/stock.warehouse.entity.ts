import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TypeEntity } from './base.type.entity';
import { Warehouse } from './warehouse.entity';
import { StockInventory } from './stock.inventory.entity';

@Entity({ name: 'stock_warehouses' })
export class StockWarehouse extends TypeEntity {
  @OneToOne(() => Warehouse, { nullable: false })
  @JoinColumn()
  public warehouse: Warehouse;

  @Generated()
  @Column({ unique: true })
  public identifier: number;

  @Column({ type: 'varchar', default: 128 })
  public barcode: string;

  @OneToMany(() => StockInventory, (inventory) => inventory.warehouse, {
    nullable: true,
  })
  @JoinColumn()
  public inventories!: StockInventory[];
}
