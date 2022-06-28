import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { CoreTimeEntity } from './base.core-timed.entity';
import { TagMembers } from './tag.members.entity';
import { Tenant } from './tenant.entity';
import { OneToOne } from 'typeorm';
import { Tree, TreeChildren, TreeParent } from 'typeorm-pg-adjacency-list-tree';

@Entity({ name: 'tags' })
@Tree()
export class Tag extends CoreTimeEntity {
  @Column({ type: 'varchar', length: 255 })
  public name: string;

  @OneToOne(() => Tenant)
  public tenant: Tenant;

  @OneToMany(() => TagMembers, (tagMembers) => tagMembers.tag)
  @JoinColumn()
  public members: TagMembers[];

  @Column({ type: 'varchar', length: 25, default: '#ff00ff' })
  public color: string;

  @TreeParent()
  public parent!: Tag;

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
