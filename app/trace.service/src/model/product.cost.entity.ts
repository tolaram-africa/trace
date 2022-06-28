import { Entity, ManyToOne, JoinColumn, OneToOne, Column } from 'typeorm';
import { SoftDeleteEntity } from './base.timed.entity';
import { ProductType } from './product.type.entity';
import { User } from './user.entity';
import { ProductModel } from './product.model.entity';

@Entity({ name: 'product_cost' })
export class ProductCost extends SoftDeleteEntity {
  @ManyToOne(() => ProductModel, (product) => product.costs)
  @JoinColumn()
  public product: ProductModel;

  @OneToOne(() => ProductType)
  @JoinColumn()
  public type: ProductType;

  @Column({ type: 'int', default: 0 })
  public cost: number;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;
}
