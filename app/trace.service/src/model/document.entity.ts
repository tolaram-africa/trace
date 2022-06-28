import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { User } from './user.entity';
import { DocumentType } from './document.type.entity';
import { CoreDeleteEntity } from './base.core-timed.entity';

@Entity({ name: 'docs' })
export class Document extends CoreDeleteEntity {
  @OneToOne(() => DocumentType)
  @JoinColumn()
  public documentType: DocumentType;

  @Column({ type: 'text', nullable: false })
  public uniqueId: string;

  @Column({ type: 'varchar', length: 1024, nullable: false })
  public name: string;

  @Column({ type: 'text', nullable: false })
  public path: string;

  @Column({ default: false })
  public approved: boolean;

  @Column({ default: false })
  public original: boolean;

  @Column({ nullable: true })
  public mime: string;

  @Column({ nullable: true })
  public description!: string;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public createdBy!: User;
}
