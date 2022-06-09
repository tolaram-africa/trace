import { Entity, JoinColumn, OneToOne, ManyToMany, JoinTable } from 'typeorm';
import { BaseTimedEntity } from './base.timed.entity';
import { Customer } from './customer.entity';
import { User } from './user.entity';

@Entity({ name: 'cust_supv' })
export class CustomerSupervisor extends BaseTimedEntity {
  @ManyToMany(() => Customer)
  @JoinTable({ name: 'cust_supv_customers' })
  public customers: Customer[];

  @OneToOne(() => User)
  @JoinColumn()
  public user: User;
}
