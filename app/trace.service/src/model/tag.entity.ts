import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';
import { CoreTimeEntity } from './base.core-timed.entity';
import { TagMembers } from './tag.members.entity';
import { Tenant } from './tenant.entity';
import { OneToOne } from 'typeorm';

@Entity({ name: 'tags' })
@Tree('materialized-path')
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
  public parent: Tag;

  @TreeChildren()
  public children: Tag[];

  @Column({ type: 'text', nullable: true })
  public description!: string;
}
