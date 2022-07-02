import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BasePermission } from './base.permission.entity';
import { UserRole } from './user.role.entity';

@Entity({ name: 'user_permissions' })
export class UserPermission extends BasePermission {
  @ManyToOne(() => UserRole, (role) => role.permissions)
  @JoinColumn()
  public role: UserRole;

  @Column({ nullable: true })
  public roleId!: string;
}
