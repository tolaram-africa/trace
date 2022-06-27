import {
  Entity,
  JoinColumn,
  OneToOne,
  ManyToMany,
  Column,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { User } from './user.entity';
import { Document } from './document.entity';
import { CustomerGroup } from './customer.group.entity';
import { Tenant } from './tenant.entity';
import { CustomerContract } from './customer.contract.entity';
import { CustomerClient } from './customer.client.entity';
import { CustomerSetting } from './customer.setting.entity';
import { CustomerSubscription } from './customer.subscription.entity';

@Entity({ name: 'custs' })
export class Customer extends BaseTaggedEntity {
  @Column({ default: true })
  public temporary!: string;

  @Column({ type: 'date', nullable: true })
  public expiry!: Date;

  @OneToOne(() => CustomerSetting, (setting) => setting.customer, {
    nullable: true,
  })
  public setting!: CustomerSetting;

  @OneToOne(() => User)
  @JoinColumn()
  public owner: User;

  @ManyToMany(() => User, { nullable: true })
  @JoinTable({ name: 'cust_managers' })
  public managers!: User[];

  @OneToMany(() => CustomerClient, (client) => client.customer, {
    nullable: true,
  })
  @JoinColumn()
  public clients!: CustomerClient[];

  @Column({ default: true })
  public billable: boolean;

  @ManyToMany(() => Document, { nullable: true })
  @JoinTable({ name: 'cust_docs' })
  public docs!: Document[];

  @OneToOne(() => CustomerGroup)
  @JoinColumn()
  public group: CustomerGroup;

  @OneToOne(() => Tenant, { nullable: false })
  @JoinColumn()
  public tenant: Tenant;

  @OneToMany(() => CustomerContract, (contract) => contract.customer, {
    nullable: true,
  })
  @JoinColumn()
  public contract!: CustomerContract[];

  @OneToOne(() => CustomerSubscription)
  @JoinColumn()
  public subscription: CustomerSubscription;
}
