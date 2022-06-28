import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { TagEntity } from './base.tagged.entity';
import { Customer } from './customer.entity';
import { User } from './user.entity';

@Entity({ name: 'product_brands' })
export class ProductBrand extends TagEntity {
  @Column({ default: false })
  public default: boolean;

  @Column()
  public name: string;

  @Column({ type: 'text', nullable: true })
  public description!: string;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;

  @ManyToMany(() => Customer)
  @JoinTable({ name: 'customer_brands' })
  public customer: Customer[];
}
