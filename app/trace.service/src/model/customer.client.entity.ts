import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TagEntity } from './base.tagged.entity';
import { User } from './user.entity';
import { Location } from './location.entity';
import { Customer } from './customer.entity';

@Entity({ name: 'custs_client' })
export class CustomerClient extends TagEntity {
  @Column({ default: true })
  public temporary!: string;

  @Column({ type: 'date', nullable: true })
  public expiry!: Date;

  @ManyToOne(() => Customer, (customer) => customer.clients)
  @JoinColumn()
  public customer!: Customer;

  @Column()
  public name: string;

  @ManyToMany(() => User)
  @JoinTable({ name: 'cust_client_users' })
  public users!: User[];

  @OneToOne(() => User)
  @JoinColumn()
  public manager!: User;

  @ManyToMany(() => User)
  @JoinTable({ name: 'cust_client_contacts' })
  public contacts!: User[];

  @ManyToMany(() => Location)
  public locations!: Location[];

  @Column({ type: 'text', nullable: true })
  public notes: string;
}
