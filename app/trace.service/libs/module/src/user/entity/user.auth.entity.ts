import { AuthProvider } from '@/common/entity/enum.user';
import { BaseAuth } from './base.auth.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { UserRole } from './user.role.entity';

@Entity({ name: 'user_auths' })
export class UserAuth extends BaseAuth {
  @Column({
    type: 'enum',
    enum: AuthProvider,
    default: [AuthProvider.LOCAL],
    array: true,
  })
  types: AuthProvider[];

  @OneToOne(() => UserRole)
  @JoinColumn()
  public role: UserRole;

  @Column({ nullable: true })
  public roleId!: string;
}
