import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { CoreDeleteEntity } from '@/common/entity/base.core.soft-delete.entity';
import { RBACPermission } from '@/common/entity/enum.user';
import { Tag } from './tag.entity';
import { User } from '@/module/user/entity/user.entity';
import { Tenant } from '@/module/tenant/entity';

@Entity({ name: 'tag_members' })
export class TagMember extends CoreDeleteEntity {
  @Index('idx_tag_member_tenantid')
  @OneToOne(() => Tenant, { nullable: true })
  @JoinColumn()
  public tenant!: Tenant;

  @Column({ nullable: true })
  public tenantId!: string;

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
