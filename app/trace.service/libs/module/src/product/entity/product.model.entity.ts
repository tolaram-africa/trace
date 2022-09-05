import {
  Generated,
  Column,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  Entity,
  ManyToOne,
} from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { Customer } from '@/module/customer/entity/customer.entity';
import { File } from '@/module/file/entity/file.entity';
import { DimensionUnit, SizeUnit, WeightUnit } from '@/common/entity/enum.base';
import { ProductCost } from './product.cost.entity';
import { Product } from './product.entity';

@Entity({ name: 'product_models' })
export class ProductModel extends SoftDeleteEntity {
  @ManyToOne(() => Product, (product) => product.models, { nullable: false })
  public product: Product;

  @Column({ nullable: true })
  public productId!: string;

  @Column({ type: 'varchar', length: 128 })
  public name: string;

  @Column({ type: 'varchar', length: 32 })
  public version: string;

  @Generated()
  @Column({ unique: true })
  public identifier!: number;

  @Column({
    type: 'enum',
    enum: SizeUnit,
    default: SizeUnit.KILOGRAM,
    nullable: true,
  })
  public unit: SizeUnit;

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

  @OneToMany(() => ProductCost, (cost) => cost.productModel)
  @JoinColumn()
  public costs: ProductCost[];

  @Column({ type: 'varchar', length: 512, nullable: true })
  public description!: string;

  @OneToOne(() => File)
  @JoinColumn()
  public image: File;

  @Column({ nullable: true })
  public imageId!: string;

  @ManyToMany(() => Customer, { nullable: true })
  @JoinTable({ name: 'customer_product_models' })
  public customers!: Customer[];
}