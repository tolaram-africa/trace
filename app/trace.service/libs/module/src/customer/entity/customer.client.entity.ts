import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { User } from '@/module/user/entity/user.entity';
import { Location } from '@/module/location/entity/location.entity';
import { Customer } from '@/module/customer/entity/customer.entity';

@Entity({ name: 'custs_client' })
export class CustomerClient extends TagEntity {
  @Column({ default: true })
  public temporary!: string;

  @Column({ type: 'date', nullable: true })
  public expiry!: Date;

  @ManyToOne(() => Customer, (customer) => customer.clients)
  @JoinColumn()
  public customer!: Customer;

  @Column({ nullable: true })
  public customerId!: string;

  @Column()
  public name: string;

  @ManyToMany(() => User)
  @JoinTable({ name: 'cust_client_users' })
  public users!: User[];

  @OneToOne(() => User)
  @JoinColumn()
  public manager!: User;

  @Column({ nullable: true })
  public managerId!: string;

  @ManyToMany(() => User)
  @JoinTable({ name: 'cust_client_contacts' })
  public contacts!: User[];

  @ManyToMany(() => Location)
  public locations!: Location[];

  @Column({ type: 'text', nullable: true })
  public notes: string;
}
