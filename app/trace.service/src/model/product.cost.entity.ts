import { Entity, ManyToOne, JoinColumn, OneToOne, Column } from 'typeorm';
import { BaseTimedEntity } from './base.timed.entity';
import { Product, ProductType } from './product.entity';
import { User } from './user.entity';

@Entity({ name: 'product_cost' })
export class ProductCost extends BaseTimedEntity {
  @ManyToOne(() => Product, (product) => product.costs)
  @JoinColumn()
  public product: Product;

  @OneToOne(() => ProductType)
  @JoinColumn()
  public type: ProductType;

  @Column({ type: 'int', default: 0 })
  public cost: number;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;
}
