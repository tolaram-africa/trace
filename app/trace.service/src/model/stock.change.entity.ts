import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { SoftDeleteEntity } from './base.soft-delete.entity';
import { StockInventory } from './stock.inventory.entity';
import { StockOutRequest } from './stock.out-request.entity';
import { StockTransfer } from './stock.transfer.entity';

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

  @Column({ type: 'int', default: 1 })
  public quantity: number;

  @ManyToOne(
    () => StockOutRequest,
    (stockOutRequest) => stockOutRequest.changes,
    { nullable: true },
  )
  @JoinColumn()
  public stockOutRequest!: StockOutRequest;

  @ManyToOne(() => StockTransfer, (stockTransfer) => stockTransfer.changes, {
    nullable: true,
  })
  @JoinColumn()
  public stockTransfer!: StockTransfer;

  @Column({ type: 'varchar', default: 512 })
  public reason: string;

  @Column({ type: 'varchar', default: 512 })
  public notes: string;
}
