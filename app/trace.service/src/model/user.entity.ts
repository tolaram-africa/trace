import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { UserProfile } from './user.profile.entity';
import { UserPass } from './user.pass.entity';
import { UserAlerts } from './user.alerts.entity';
import { UserAccountType, UserType } from './enum.user';
import { Schedule } from './schedule.entity';
import { ManyToMany } from 'typeorm';
import { MaxLength } from 'class-validator';
import { CoreTimeEntity } from './base.core-timed.entity';
import { UserSetting } from './user.setting.entity';
import { Tenant } from './tenant.entity';
import { BankAccount } from './user.bank-account.entity';
import { TransactionAccount } from './user.transcation-account.entity';

@Entity({ name: 'users' })
export class User extends CoreTimeEntity {
  @OneToOne(() => UserProfile)
  @JoinColumn()
  public profile!: UserProfile;

  @OneToOne(() => UserPass)
  @JoinColumn()
  public passport!: UserPass;

  @OneToOne(() => UserSetting, (setting) => setting.user, { nullable: true })
  public setting!: UserSetting;

  @OneToMany(() => UserAlerts, (alerts) => alerts.user)
  public alerts!: UserAlerts[];

  @Column({ default: true })
  public loginEnabled: boolean;

  @Column({ default: true })
  public isActive: boolean;

  @Column({ type: 'bigint', unique: true, nullable: false })
  @MaxLength(15)
  public phone: number;

  @Column({ type: 'varchar', length: 64, unique: false, nullable: false })
  public username: string;

  @Column({ default: false })
  public readonly: boolean;

  @Column({ type: 'timestamptz', nullable: true })
  public expiry!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public lastActive!: Date;
  true;

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

  @OneToOne(() => Tenant, { nullable: true })
  @JoinColumn()
  public tenant!: Tenant;

  @OneToOne(() => TransactionAccount, { nullable: true })
  @JoinColumn()
  public accountBalance!: TransactionAccount;

  @ManyToMany(() => BankAccount, { nullable: true })
  @JoinTable({ name: 'user_bank_accounts' })
  public bankAccounts!: BankAccount[];

  @ManyToMany(() => Schedule, { nullable: true })
  @JoinTable({ name: 'user_schedules' })
  public schedules!: Schedule[];
}
