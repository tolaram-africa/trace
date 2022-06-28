import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { TypeEntity } from '@/common/entity/base.type.entity';
import { Customer } from './customer.entity';
import { SizeUnit } from '@/common/entity/enum.base';

@Entity({ name: 'product_types' })
export class ProductType extends TypeEntity {
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
