import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { CoreDeleteEntity } from '@/common/entity/base.core.soft-delete.entity';
import { RBACPermission } from '@/common/entity/enum.user';
import { Tag } from './tag.entity';
import { User } from '@/module/user/entity/user.entity';

@Entity({ name: 'tag_members' })
export class TagMembers extends CoreDeleteEntity {
  @ManyToOne(() => Tag, (tag) => tag.members)
  @JoinColumn()
  public tag: Tag;

  @OneToOne(() => User)
  @JoinColumn()
  public user: User;

  @Column({
    type: 'enum',
    enum: RBACPermission,
    array: true,
    default: [RBACPermission.READ],
  })
  public permission: RBACPermission[];

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public expiry: Date;
}
