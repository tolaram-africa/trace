import { TagEntity } from '@/common/entity/base.tag.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { User } from '@/module/user/entity/user.entity';
import { ProductBrand } from './product.brand.entity';
import { ProductCategory } from './product.category.entity';
import { Customer } from '@/module/customer/entity/customer.entity';
import { ProductModel } from './product.model.entity';

@Entity({ name: 'products' })
export class Product extends TagEntity {
  @Column({ default: false })
  public default: boolean;

  @Column({ type: 'varchar', length: 128 })
  public name: string;

  @Column({ default: false })
  public perishable: boolean;

  @Column({ default: false })
  public hazardrous: boolean;

  @Column({ type: 'text', nullable: true })
  public description!: string;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @OneToOne(() => ProductBrand)
  @JoinColumn()
  public brand: ProductBrand;

  @Column({ nullable: true })
  public brandId!: string;

  @OneToOne(() => ProductCategory)
  @JoinColumn()
  public category: ProductCategory;

  @Column({ nullable: true })
  public categoryId!: string;

  @OneToMany(() => ProductModel, (model) => model.product, { nullable: true })
  @JoinColumn()
  public models!: ProductModel[];

  @ManyToMany(() => Customer, { nullable: true })
  @JoinTable({ name: 'customer_products' })
  public customers!: Customer[];
}
