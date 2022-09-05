import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
  AfterLoad,
  Index,
  RelationId,
} from 'typeorm';
import { TenantEntity, SystemLevel, RoleType } from '@/common/entity';
import { UserProfile, UserAlert, UserSetting, UserPassport } from './';
import { Schedule } from '@/module/schedule/entity/schedule.entity';
import { BankAccount } from '@/module/payment/entity/payment.bank-account.entity';
import { Tag } from '@/module/tag/entity';
import { Tree, TreeChildren, TreeParent } from 'typeorm-pg-adjacency-list-tree';
import { UserNavigation } from './user.navigation.entity';

@Entity({ name: 'users' })
@Tree()
export class User extends TenantEntity {
  @Column({
    type: 'enum',
    enum: SystemLevel,
    default: SystemLevel.CLIENT,
  })
  public serviceGroup: SystemLevel;

  @Column({
    type: 'enum',
    enum: RoleType,
    default: RoleType.CLIENT,
  })
  public userType: RoleType;

  @Column({ default: true })
  public active: boolean;

  @Index('idx_user_phone')
  @Column({ type: 'varchar', length: 15, unique: true, nullable: false })
  public phone: string;

  @Index('idx_user_username')
  @Column({ type: 'varchar', length: 64, unique: false, nullable: false })
  public username: string;

  @Index('idx_user_first_name')
  @Column({ type: 'varchar', length: 128, nullable: false })
  public firstName: string;

  @Index('idx_user_middle_name')
  @Column({ type: 'varchar', length: 128, nullable: true })
  public middleName!: string;

  @Index('idx_user_last_name')
  @Column({ type: 'varchar', length: 128, nullable: false })
  public lastName: string;

  @Column({ type: 'varchar', length: 256, nullable: false })
  public name: string;

  @Index('idx_user_profileid')
  @OneToOne(() => UserProfile, (porfile) => porfile.user, {
    nullable: true,
  })
  @JoinColumn()
  public profile!: UserProfile;

  @RelationId((item: User) => item.profile)
  @Column({ type: 'uuid', nullable: true })
  public profileId!: string;

  @Index('idx_user_tagid')
  @OneToOne(() => Tag, { cascade: true, nullable: true })
  @JoinColumn()
  public team!: Tag;

  @RelationId((item: User) => item.team)
  @Column({ type: 'uuid', nullable: true })
  public teamId: string;

  @Index('idx_user_settingid')
  @OneToOne(() => UserSetting, (setting) => setting.user, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn()
  public setting!: UserSetting;

  @RelationId((item: User) => item.setting)
  @Column({ type: 'uuid', nullable: true })
  public settingId!: string;

  @Index('idx_user_navid')
  @OneToOne(() => UserNavigation, (navigation) => navigation.user, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn()
  public navigation!: UserNavigation;

  @RelationId((item: User) => item.navigation)
  @Column({ type: 'uuid', nullable: true })
  public navigationId!: string;

  @OneToMany(() => UserAlert, (alerts) => alerts.user)
  @JoinColumn()
  public alerts!: UserAlert[];

  @Column({ default: true })
  public loginEnabled!: boolean;

  @Column({ default: false })
  public readonly!: boolean;

  @Column({ type: 'timestamptz', nullable: true })
  public expiry!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public lastActive!: Date;

  @TreeParent()
  public manager!: User;

  @Column({ nullable: true })
  public parentId!: string;

  @TreeChildren()
  public directReports!: User[];

  @OneToMany(() => UserPassport, (passport) => passport.user)
  @JoinColumn()
  public passports!: UserPassport[];

  @ManyToMany(() => BankAccount, { nullable: true })
  @JoinTable({ name: 'user_bank_accounts' })
  public bankAccounts!: BankAccount[];

  @ManyToMany(() => Schedule, { nullable: true })
  @JoinTable({ name: 'user_schedules' })
  public schedules!: Schedule[];

  @AfterLoad()
  setCombined() {
    this.name = this.firstName + ' ' + this.middleName + ' ' + this.lastName;
  }
}

// EXAMPLE: Usage example
// @EntityRepository(User)
// class UserRepository extends TreeRepository<User> {}
// countDescendants() All descendants count.
// findDescendantsTree() All descendants in flat array
