import {
  Entity,
  JoinColumn,
  OneToOne,
  ManyToMany,
  Column,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { User } from '@/module/user/entity/user.entity';
import { File } from '@root/libs/module/src/file/entity/file.entity';
import { CustomerGroup } from './customer.group.entity';
import { CustomerContract } from './customer.contract.entity';
import { CustomerClient } from './customer.client.entity';
import { CustomerSetting } from './customer.setting.entity';
import { CustomerSubscription } from './customer.subscription.entity';

@Entity({ name: 'custs' })
export class Customer extends TagEntity {
  @Column({ default: true })
  public temporary!: string;

  @Column({ type: 'date', nullable: true })
  public expiry!: Date;

  @OneToOne(() => CustomerSetting, (setting) => setting.customer, {
    nullable: true,
  })
  @JoinColumn()
  public setting!: CustomerSetting;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public owner!: User;

  @Column({ nullable: true })
  public ownerId!: string;

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

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'cust_files' })
  public files!: File[];

  @OneToOne(() => CustomerGroup)
  @JoinColumn()
  public group: CustomerGroup;

  @Column({ nullable: true })
  public groupId!: string;

  @OneToOne(() => CustomerSubscription, { nullable: true })
  @JoinColumn()
  public subscription!: CustomerSubscription;

  @Column({ nullable: true })
  public subscriptionId!: string;

  @OneToMany(() => CustomerContract, (contract) => contract.customer, {
    nullable: true,
  })
  @JoinColumn()
  public contracts!: CustomerContract[];
}
