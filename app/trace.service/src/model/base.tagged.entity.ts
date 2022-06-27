import { JoinTable, ManyToMany } from 'typeorm';
import { BaseTimedEntity } from './base.timed.entity';
import { Tag } from './tag.entity';

export abstract class BaseTaggedEntity extends BaseTimedEntity {
  @ManyToMany(() => Tag)
  @JoinTable()
  public tag!: Tag[];
}
