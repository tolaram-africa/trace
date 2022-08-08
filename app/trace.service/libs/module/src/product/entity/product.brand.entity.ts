import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { Customer } from '@/module/customer/entity/customer.entity';
import { User } from '@/module/user/entity/user.entity';

@Entity({ name: 'product_brands' })
export class ProductBrand extends TagEntity {
  @Column({ default: false })
  public default: boolean;

  @Column({ type: 'varchar', length: 128 })
  public name: string;

  @Column({ type: 'text', nullable: true })
  public description!: string;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @ManyToMany(() => Customer)
  @JoinTable({ name: 'customer_brands' })
  public customers!: Customer[];
}
