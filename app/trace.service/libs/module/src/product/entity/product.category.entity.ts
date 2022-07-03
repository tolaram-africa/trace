import { Entity, ManyToMany, JoinTable } from 'typeorm';
import { TypeEntity } from '@/common/entity/base.type.entity';
import { Customer } from '@/module/customer/entity/customer.entity';

@Entity({ name: 'product_types' })
export class ProductCategory extends TypeEntity {
  @ManyToMany(() => Customer, { nullable: true })
  @JoinTable({ name: 'customer_product_categories' })
  public customers!: Customer[];
}
