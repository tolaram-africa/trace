import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { SoftDeleteEntity } from './base.timed.entity';
import { SystemUserType } from './enum.user';
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
    enum: SystemUserType,
    default: [SystemUserType.ALL],
    array: true,
  })
  public userTypes: SystemUserType[];

  @Column({ type: 'varchar', length: 512, nullable: true })
  public description!: string;
}
