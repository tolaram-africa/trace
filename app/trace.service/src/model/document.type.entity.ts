import { Column, Entity } from 'typeorm';
import { BaseTypeEntity } from './base.type.entity';

@Entity({ name: 'doc_type' })
export class DocumentType extends BaseTypeEntity {
  @Column()
  public icon: string;

  @Column()
  public module: string;
}
