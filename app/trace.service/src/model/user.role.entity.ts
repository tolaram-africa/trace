import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { BaseTimedEntity } from './base.timed.entity';
import { UserType } from './enum.user';
import { UserPermission } from './user.permission.entity';

@Entity({ name: 'user_roles' })
export class UserRole extends BaseTimedEntity {
  @Column({ default: false })
  public default: boolean;

  @Column({ type: 'varchar', length: 128 })
  public name: string;

  @OneToMany(() => UserPermission, (permission) => permission.role)
  @JoinColumn()
  public permissions: UserPermission[];

  @Column({
    type: 'enum',
    enum: UserType,
    default: [UserType.ALL],
    array: true,
  })
  public userTypes: UserType[];

  @Column({ type: 'varchar', length: 512, nullable: true })
  public description!: string;
}
