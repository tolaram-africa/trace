import { Column, Entity } from 'typeorm';
import { TypeEntity } from './base.type.entity';

@Entity({ name: 'doc_type' })
export class DocumentType extends TypeEntity {
  @Column()
  public icon: string;

  @Column()
  public module: string;
}
