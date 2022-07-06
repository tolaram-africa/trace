import { TenantEntity } from '@/common/entity/base.tenant.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { RBACPermission } from '@/common/entity/enum.user';
import { Tag } from './tag.entity';
import { User } from '@/module/user/entity/user.entity';

@Entity({ name: 'tag_members' })
export class TagMember extends TenantEntity {
  @Index('idx_tag_member_tagid')
  @ManyToOne(() => Tag, (tag) => tag.members)
  @JoinColumn()
  public tag: Tag;

  @Column({ nullable: true })
  public tagId!: string;

  @Index('idx_tag_member_userid')
  @OneToOne(() => User)
  @JoinColumn()
  public user: User;

  @Column({ nullable: true })
  public userId!: string;

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
  public expiry!: Date;
}
