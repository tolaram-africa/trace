import { Column, JoinColumn, OneToOne } from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { User } from '@/module/user/entity/user.entity';

export enum RecoveryOption {
  EMAIL = 'email',
  SMS = 'sms',
  BACKUP_CODE = 'backup_code',
}

export abstract class BaseAuth extends SoftDeleteEntity {
  @OneToOne(() => User)
  @JoinColumn()
  public user: User;

  @Column({
    type: 'enum',
    enum: RecoveryOption,
    array: true,
    default: [RecoveryOption.EMAIL],
  })
  public recoveryAllowed: RecoveryOption[];

  @Column({
    type: 'enum',
    enum: RecoveryOption,
    default: RecoveryOption.EMAIL,
  })
  public recoveryDefault: RecoveryOption;

  @Column({ type: 'varchar', length: 128, nullable: false })
  public passwordHash: string;

  @Column({ type: 'varchar', length: 128, nullable: false })
  public passwordSalt: string;

  @Column({ default: false })
  public twoFactorEnabled: boolean;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public twoFactorSecret!: string;
}