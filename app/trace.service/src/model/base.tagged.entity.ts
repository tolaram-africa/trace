import { BaseEntity } from './base.entity';
import { JoinTable, ManyToMany } from 'typeorm';
import { Tag } from './tag.entity';

export abstract class BaseTaggedEntity extends BaseEntity {
  @ManyToMany(() => Tag)
  @JoinTable()
  public tag!: Tag[];
}
