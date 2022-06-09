import { BaseTaggedEntity } from './base.tagged.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { DimensionUnit, SizeUnit, WeightUnit } from './enum.base';
import { ProductCost } from './product.cost.entity';
import { User } from './user.entity';
import { Brand } from './brand.entity';
import { Customer } from './customer.entity';
import { BaseTypeEntity } from './base.type.entity';

@Entity({ name: 'product_types' })
export class ProductType extends BaseTypeEntity {
  @Column({
    type: 'enum',
    enum: SizeUnit,
    default: SizeUnit.MILLIGRAM,
    nullable: true,
  })
  unit: SizeUnit;
}

@Entity({ name: 'products' })
export class Product extends BaseTaggedEntity {
  @Column({ default: false })
  public default: boolean;

  @Column()
  public name: string;

  @Column({ type: 'text', nullable: true })
  public description: string;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;

  @OneToOne(() => Brand)
  @JoinColumn()
  public brand: Brand;

  @OneToOne(() => ProductType)
  @JoinColumn()
  public type: ProductType;

  @Column({
    type: 'enum',
    enum: DimensionUnit,
    default: DimensionUnit.CENTIMETER,
  })
  public dimensionUnit: DimensionUnit;

  @Column({ type: 'int', default: 1 })
  public dimensionArea: number;

  @Column({ type: 'enum', enum: WeightUnit, default: WeightUnit.KILOGRAM })
  public weightUnit: WeightUnit;

  @Column({ type: 'int', default: 1 })
  public weight: number;

  @OneToMany(() => ProductCost, (cost) => cost.product)
  @JoinColumn()
  public costs: ProductCost[];

  @ManyToMany(() => Customer)
  @JoinTable({ name: 'customer_products' })
  public customer: Customer[];
}
