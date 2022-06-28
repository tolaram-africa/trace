import { Tag } from '@root/src/model/tag.entity';
import { JoinTable, ManyToMany } from 'typeorm';
import { SoftDeleteEntity } from './base.soft-delete.entity';

export abstract class TagEntity extends SoftDeleteEntity {
  @ManyToMany(() => Tag, { nullable: true })
  @JoinTable()
  public tag!: Tag[];
}
