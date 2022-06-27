import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { BaseTypeEntity } from './base.type.entity';
import { Customer } from './customer.entity';
import { SizeUnit } from './enum.base';

@Entity({ name: 'product_types' })
export class ProductType extends BaseTypeEntity {
  @Column({
    type: 'enum',
    enum: SizeUnit,
    default: SizeUnit.MILLIGRAM,
    nullable: true,
  })
  unit: SizeUnit;

  @ManyToMany(() => Customer, { nullable: true })
  @JoinTable({ name: 'customer_product_types' })
  public customer!: Customer[];
}
