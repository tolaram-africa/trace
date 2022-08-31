import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { SystemUser } from '@/common/entity/enum.user';
import { SystemUserPermission } from './system.user-permission.entity';

@Entity({ name: 'system_user_roles' })
export class SystemUserRole extends SoftDeleteEntity {
  @Column({ default: false })
  public default: boolean;

  @Column({ type: 'varchar', length: 128 })
  public name: string;

  @OneToMany(() => SystemUserPermission, (permission) => permission.role)
  @JoinColumn()
  public permissions: SystemUserPermission[];

  @Column({
    type: 'enum',
    enum: SystemUser,
    default: [SystemUser.OPERATOR],
    array: true,
  })
  public userTypes: SystemUser[];

  @Column({ type: 'varchar', length: 512, nullable: true })
  public description!: string;
}
