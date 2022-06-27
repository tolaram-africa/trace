import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { ProductModel } from './product.model.entity';
import { StockPurchaseRequest } from './stock.purchase-request.entity';

@Entity({ name: 'stock_purchase_items' })
export class StockPurchaseItem extends BaseTaggedEntity {
  @OneToOne(() => ProductModel)
  @JoinColumn()
  public product: ProductModel;

  @ManyToOne(() => StockPurchaseRequest, (request) => request.items)
  public request: StockPurchaseRequest;

  @Column({ type: 'int', default: 1 })
  public quantity: number;

  @Column({ type: 'int', default: 1 })
  public price: number;

  @Column({ type: 'int', default: 1 })
  public discount: number;
}
