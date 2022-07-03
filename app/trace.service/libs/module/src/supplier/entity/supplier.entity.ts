import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { ExtendedAddress } from '@/common/entity/base.address.entity';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { File } from '../../file/entity/file.entity';
import { User } from '@/module/user/entity/user.entity';

@Entity({ name: 'suppliers' })
export class Supplier extends SoftDeleteEntity {
  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public contact!: User;

  @Index('idx_supplier_name')
  @Column({ type: 'varchar', length: 128 })
  public name: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public identifier: string;

  @Column(() => ExtendedAddress)
  public address: ExtendedAddress;

  @Column({ type: 'varchar', length: 512, nullable: true })
  public website: string;

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'supplier_files' })
  public files!: File[];
}
