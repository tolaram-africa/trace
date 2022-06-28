import { JoinTable, ManyToMany } from 'typeorm';
import { SoftDeleteEntity } from './base.timed.entity';
import { Tag } from './tag.entity';

export abstract class TagEntity extends SoftDeleteEntity {
  @ManyToMany(() => Tag, { nullable: true })
  @JoinTable()
  public tag!: Tag[];
}
