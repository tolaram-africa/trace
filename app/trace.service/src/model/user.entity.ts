import { Entity, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { UserProfile } from './user.profile.entity';
import { UserPassport } from './user.passport.entity';
import { UserSettings } from './user.settings.entity';
import { UserAlerts } from './user.alerts.entity';
import { UserAccountType, UserType } from './enum.user';

@Entity({ name: 'users' })
export class User extends BaseTaggedEntity {
  @OneToOne(() => UserProfile)
  @JoinColumn()
  public profile: UserProfile;

  @OneToOne(() => UserPassport)
  @JoinColumn()
  public passport: UserPassport;

  @OneToOne(() => UserSettings, (setting) => setting.user)
  public setting: UserSettings;

  @OneToMany(() => UserAlerts, (alerts) => alerts.user)
  public alerts: UserAlerts[];

  @Column({ default: true })
  public isActive: boolean;

  @Column({ type: 'varchar', length: 50 })
  public username: string;

  @Column({ default: false })
  public readonly: boolean;

  @Column({ type: 'timestamptz' })
  public expiry: Date;

  @Column({ type: 'timestamptz' })
  public lastActive: Date;

  @Column({
    type: 'enum',
    enum: UserAccountType,
    default: UserAccountType.CUSTOMER_SUB,
  })
  public accountType: UserAccountType;

  @Column({
    type: 'enum',
    enum: UserType,
    default: UserType.CUSTOMER_SUB,
  })
  public type: UserType;

  // role: Role;
  // bankAccounts?: BankAccounts[];
  // schedules?: Schedule[];
  // channels: ComunicationChannel[];
}
