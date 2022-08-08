import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { User } from '@/module/user/entity/user.entity';
import { FileType } from './file.type.entity';
import { CoreDeleteEntity } from '@/common/entity/base.core.soft-delete.entity';

@Entity({ name: 'docs' })
export class File extends CoreDeleteEntity {
  @OneToOne(() => FileType)
  @JoinColumn()
  public type: FileType;

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
