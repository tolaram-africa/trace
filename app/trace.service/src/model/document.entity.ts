import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { User } from './user.entity';
import { DocumentType } from './document.type.entity';
import { BaseTaggedEntity } from './base.tagged.entity';

@Entity({ name: 'docs' })
export class Document extends BaseTaggedEntity {
  @OneToOne(() => DocumentType)
  @JoinColumn()
  public documentType: DocumentType;

  @Column({ default: false })
  public approved: boolean;

  @Column({ default: false })
  public original: boolean;

  @Column()
  public path: string;

  @Column()
  public mime: string;

  @Column()
  public description: string;

  @ManyToOne(() => User)
  @JoinColumn()
  public approvedBy: User;
}
