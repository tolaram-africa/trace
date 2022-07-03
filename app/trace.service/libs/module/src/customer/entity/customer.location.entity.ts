import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { User } from '@/module/user/entity/user.entity';
import { Location } from '@/module/location/entity/location.entity';
import { Customer } from './customer.entity';

@Entity({ name: 'custs_locations' })
export class CustomerLocation extends TagEntity {
  @Column({ type: 'varchar', length: 128, nullable: true })
  public name!: string;

  @OneToOne(() => Customer)
  @JoinColumn()
  public customer: Customer;

  @Column({ nullable: true })
  public customerId!: string;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public manager!: User;

  @Column({ nullable: true })
  public managerId!: string;

  @ManyToMany(() => User)
  @JoinTable({ name: 'cust_contacts' })
  public contacts!: User[];

  @OneToOne(() => Location, { nullable: false })
  @JoinColumn()
  public location: Location;

  @Column({ type: 'text', nullable: true })
  public notes!: string;
}
