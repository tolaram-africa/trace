import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { UserProfile } from './user.profile.entity';
import { UserAlert } from './user.alerts.entity';
import { UserAccountType, UserType } from '@/common/entity/enum.user';
import { Schedule } from './schedule.entity';
import { ManyToMany } from 'typeorm';
import { CoreDeleteEntity } from '@/common/entity/base.core.soft-delete.entity';
import { UserSetting } from './user.setting.entity';
import { Tenant } from './tenant.entity';
import { BankAccount } from './paymeny.bank-account.entity';
import { TransactionAccount } from './payment.transcation-account.entity';
import { Tree, TreeChildren, TreeParent } from 'typeorm-pg-adjacency-list-tree';
import { UserPassport } from './user.passport.entity';

@Entity({ name: 'users' })
@Tree()
export class User extends CoreDeleteEntity {
  @Column({
    type: 'enum',
    enum: UserAccountType,
    default: UserAccountType.CUSTOMER_CLIENT,
  })
  public accountType: UserAccountType;

  @Column({
    type: 'enum',
    enum: UserType,
    default: UserType.CUSTOMER_CLIENT,
  })
  public type: UserType;

  @Column({ default: true })
  public active!: boolean;

  @Column({ type: 'bigint', unique: true, nullable: false })
  public phone: number;

  @Column({ type: 'varchar', length: 64, unique: false, nullable: false })
  public username: string;

  @Column({ type: 'varchar', length: 128, nullable: false })
  public firstName: string;

  @Column({ type: 'varchar', length: 128, nullable: false })
  public lastName: string;

  @OneToOne(() => UserProfile, (porfile) => porfile.user, { nullable: true })
  @JoinColumn()
  public profile!: UserProfile;

  @OneToOne(() => UserSetting, (setting) => setting.user, { nullable: true })
  @JoinColumn()
  public setting!: UserSetting;

  @OneToMany(() => UserAlert, (alerts) => alerts.user, { nullable: true })
  @JoinColumn()
  public alerts!: UserAlert[];

  @Column({ default: true })
  public loginEnabled: boolean;

  @Column({ default: false })
  public readonly: boolean;

  @Column({ type: 'timestamptz', nullable: true })
  public expiry!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public lastActive!: Date;

  @OneToOne(() => Tenant, { nullable: true })
  @JoinColumn()
  public tenant!: Tenant;

  @OneToOne(() => TransactionAccount, { nullable: true })
  @JoinColumn()
  public accountBalance!: TransactionAccount;

  @TreeParent()
  public manager!: User;

  @TreeChildren()
  public directReports!: User[];

  @ManyToMany(() => BankAccount, { nullable: true })
  @JoinTable({ name: 'user_bank_accounts' })
  public bankAccounts!: BankAccount[];

  @ManyToMany(() => Schedule, { nullable: true })
  @JoinTable({ name: 'user_schedules' })
  public schedules!: Schedule[];

  @OneToMany(() => UserPassport, (item) => item.user, { nullable: true })
  @JoinColumn()
  public passport!: UserPassport[];
}

// EXAMPLE: Usage example
// @EntityRepository(User)
// class UserRepository extends TreeRepository<User> {}
// countDescendants() All descendants count.
// findDescendantsTree() All descendants in flat array
