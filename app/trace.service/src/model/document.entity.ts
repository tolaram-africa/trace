import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { User } from './user.entity';
import { DocumentType } from './document.type.entity';
import { CoreTimeEntity } from './base.core-timed.entity';

@Entity({ name: 'docs' })
export class Document extends CoreTimeEntity {
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

  @Column()
  public mime: string;

  @Column()
  public description!: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;
}
