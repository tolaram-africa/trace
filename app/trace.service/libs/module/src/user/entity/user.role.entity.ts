import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { RoleType } from '@/common/entity/enum.user';
import { UserPermission } from './user.permission.entity';

@Entity({ name: 'user_roles' })
export class UserRole extends SoftDeleteEntity {
  @Column({ default: false })
  public default: boolean;

  @Column({ type: 'varchar', length: 128 })
  public name: string;

  @OneToMany(() => UserPermission, (permission) => permission.role)
  @JoinColumn()
  public permissions: UserPermission[];

  @Column({
    type: 'enum',
    enum: RoleType,
    default: [RoleType.CLIENT],
    array: true,
  })
  public userTypes: RoleType[];

  @Column({ type: 'varchar', length: 512, nullable: true })
  public description!: string;
}
