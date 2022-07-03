import { Column, Entity } from 'typeorm';
import { TypeEntity } from '@/common/entity/base.type.entity';

@Entity({ name: 'doc_type' })
export class FileType extends TypeEntity {
  @Column()
  public icon: string;

  @Column()
  public module: string;
}
