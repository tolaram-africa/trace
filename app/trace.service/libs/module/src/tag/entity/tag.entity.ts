import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { CoreDeleteEntity } from '@/common/entity/base.core.soft-delete.entity';
import { TagMember } from './tag.members.entity';
import { Tree, TreeChildren, TreeParent } from 'typeorm-pg-adjacency-list-tree';
import { Tenant } from '@/module/tenant/entity/tenant.entity';

@Entity({ name: 'tags' })
@Tree()
export class Tag extends CoreDeleteEntity {
  @Column({ type: 'varchar', length: 128 })
  public name: string;

  @Index('idx_tag_tenantid')
  @OneToOne(() => Tenant, { nullable: true })
  @JoinColumn()
  public tenant!: Tenant;

  @Column({ nullable: true })
  public tenantId!: string;

  @OneToMany(() => TagMember, (tagMembers) => tagMembers.tag, {
    nullable: true,
  })
  @JoinColumn()
  public members!: TagMember[];

  @Column({ type: 'varchar', length: 25, default: '#ff00ff' })
  public color: string;

  @TreeParent()
  public parent!: Tag;

  @Column({ nullable: true })
  public parentId!: string;

  @TreeChildren()
  public childrens!: Tag[];

  @Column({ type: 'text', nullable: true })
  public description!: string;
}

// EXAMPLE: Usage example
// @EntityRepository(Tag)
// class TagRepository extends TreeRepository<Tag> {}
// countDescendants() All descendants count.
// findDescendantsTree() All descendants in flat array
