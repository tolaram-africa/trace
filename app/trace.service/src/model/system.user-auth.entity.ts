import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { BaseAuth } from './base.auth.entity';
import { AuthProvider } from './enum.user';
import { SystemUserRole } from './system.user-role.entity';

@Entity({ name: 'system_user_auths' })
export class SystemUserAuth extends BaseAuth {
  @Column({
    type: 'enum',
    enum: AuthProvider,
    default: AuthProvider.LOCAL,
  })
  public type: AuthProvider;

  @OneToOne(() => SystemUserRole)
  @JoinColumn()
  public role: SystemUserRole;
}
