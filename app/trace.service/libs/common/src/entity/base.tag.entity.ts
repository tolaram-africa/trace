import { Column, Index, JoinTable, ManyToMany } from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { Tag } from '@/module/tag/entity/tag.entity';

export abstract class TagEntity extends SoftDeleteEntity {
  @ManyToMany(() => Tag, { nullable: true })
  @JoinTable()
  public tag!: Tag[];

  @Column({ nullable: true })
  public tagId!: string;
}
