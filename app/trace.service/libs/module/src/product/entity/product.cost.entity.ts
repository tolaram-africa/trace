import {
  Entity,
  ManyToOne,
  JoinColumn,
  OneToOne,
  Column,
  Index,
} from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { User } from '@/module/user/entity/user.entity';
import { ProductModel } from './product.model.entity';

@Entity({ name: 'product_cost' })
export class ProductCost extends SoftDeleteEntity {
  @Index('idx_product_cost_modelid')
  @ManyToOne(() => ProductModel, (product) => product.costs)
  @JoinColumn()
  public productModel: ProductModel;

  @Column({ nullable: true })
  public productModelId!: string;

  @Column({ type: 'int', default: 0 })
  public cost: number;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;
}
