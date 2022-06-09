import {
  Entity,
  JoinColumn,
  OneToOne,
  ManyToMany,
  Column,
  JoinTable,
} from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { User } from './user.entity';
import { Document } from './document.entity';
import { CustomerGroup } from './customer.group.entity';

@Entity({ name: 'custs' })
export class Customer extends BaseTaggedEntity {
  @OneToOne(() => User)
  @JoinColumn()
  public owner: User;

  @ManyToMany(() => User)
  @JoinTable({ name: 'cust_managers' })
  public managers!: User[];

  @Column({ default: true })
  public billable: boolean;

  @ManyToMany(() => Document)
  @JoinTable({ name: 'cust_docs' })
  public docs!: Document[];

  @OneToOne(() => CustomerGroup)
  @JoinColumn()
  public group: CustomerGroup;

  // public tenant?: Tenant;

  // public subscription?: CustomerSubscription[];
}
