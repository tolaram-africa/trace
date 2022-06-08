import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'doc_type' })
export class DocumentType extends BaseEntity {
  @Column()
  public name: string;

  @Column()
  public icon: string;

  @Column()
  public sample: string;

  @Column({ default: false })
  public default: boolean;

  @Column({ type: 'text' })
  public description: string;
}
