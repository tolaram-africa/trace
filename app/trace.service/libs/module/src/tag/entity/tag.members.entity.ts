import { TenantEntity } from '@/common/entity/base.tenant.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  RelationId,
} from 'typeorm';
import { RBACPermission } from '@/common/entity/enum.user';
import { Tag } from './tag.entity';
import { User } from '@/module/user/entity/user.entity';

@Entity({ name: 'tag_members' })
export class TagMember extends TenantEntity {
  @Index('idx_tag_member_tagid')
  @ManyToOne(() => Tag, (tag) => tag.members, {
    onDelete: 'SET NULL',
    orphanedRowAction: 'nullify',
  })
  @JoinColumn()
  public tag: Tag;

  @RelationId((item: TagMember) => item.tag)
  @Column({ type: 'uuid', nullable: true })
  public tagId!: string;

  @Index('idx_tag_member_userid')
  @OneToOne(() => User, {
    onDelete: 'SET NULL',
    orphanedRowAction: 'nullify',
  })
  @JoinColumn()
  public user: User;

  @RelationId((item: TagMember) => item.user)
  @Column({ type: 'uuid', nullable: true })
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
