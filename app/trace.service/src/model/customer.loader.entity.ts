import { Entity, JoinColumn, OneToOne, ManyToMany, JoinTable } from 'typeorm';
import { SoftDeleteEntity } from './base.timed.entity';
import { Customer } from './customer.entity';
import { User } from './user.entity';

@Entity({ name: 'cust_loaders' })
export class CustomerLoader extends SoftDeleteEntity {
  @ManyToMany(() => Customer)
  @JoinTable({ name: 'cust_loader_customers' })
  public customers: Customer[];

  @OneToOne(() => User)
  @JoinColumn()
  public user: User;
}
