import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BasePermission } from '@/module/user/entity/base.permission.entity';
import { SystemUserRole } from './system.user-role.entity';

@Entity({ name: 'system_user_permissions' })
export class SystemUserPermission extends BasePermission {
  @ManyToOne(() => SystemUserRole, (role) => role.permissions)
  @JoinColumn()
  public role: SystemUserRole;

  @Column({ nullable: true })
  public roleId!: string;
}
