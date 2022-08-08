import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { StockInventory } from '@/module/stock/entity/stock.inventory.entity';
import { StockOutRequest } from '@/module/stock/entity/stock.out-request.entity';
import { StockTransfer } from '@/module/stock/entity/stock.transfer.entity';

export enum StockChangeDirection {
  IN = 'IN',
  OUT = 'OUT',
}

@Entity({ name: 'stock_changes' })
export class StockChange extends SoftDeleteEntity {
  @Column({ type: 'enum', enum: StockChangeDirection, nullable: false })
  public type: StockChangeDirection;

  @OneToOne(() => StockInventory)
  @JoinColumn()
  public inventory: StockInventory;

  @Column({ nullable: true })
  public inventoryId!: string;

  @Column({ type: 'int', default: 1 })
  public quantity: number;

  @ManyToOne(
    () => StockOutRequest,
    (stockOutRequest) => stockOutRequest.changes,
    { nullable: true },
  )
  @JoinColumn()
  public stockOutRequest!: StockOutRequest;

  @Column({ nullable: true })
  public stockOutRequestId!: string;

  @ManyToOne(() => StockTransfer, (stockTransfer) => stockTransfer.changes, {
    nullable: true,
  })
  @JoinColumn()
  public stockTransfer!: StockTransfer;

  @Column({ nullable: true })
  public stockTransferId!: string;

  @Column({ type: 'varchar', default: 512 })
  public reason: string;

  @Column({ type: 'varchar', default: 512 })
  public notes: string;
}
