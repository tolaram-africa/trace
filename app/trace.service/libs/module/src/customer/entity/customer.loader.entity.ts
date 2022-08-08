import {
  Entity,
  JoinColumn,
  OneToOne,
  ManyToMany,
  JoinTable,
  Column,
} from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { Customer } from '@/module/customer/entity/customer.entity';
import { User } from '@/module/user/entity/user.entity';

@Entity({ name: 'cust_loaders' })
export class CustomerLoader extends SoftDeleteEntity {
  @ManyToMany(() => Customer)
  @JoinTable({ name: 'cust_loader_customers' })
  public customers: Customer[];

  @OneToOne(() => User)
  @JoinColumn()
  public user: User;

  @Column({ nullable: true })
  public userId!: string;
}
