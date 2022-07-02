import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { AuthProvider } from '@/common/entity';
import { SystemUserRole } from './';
import { BaseAuth } from '@/module/user/entity';

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
