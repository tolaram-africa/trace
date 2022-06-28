import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { ExtendedAddress } from '@/common/entity/base.address.entity';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { Document } from './document.entity';
import { User } from './user.entity';

@Entity({ name: 'suppliers' })
export class Supplier extends SoftDeleteEntity {
  @OneToOne(() => User)
  @JoinColumn()
  public contact: User;

  @Column({ type: 'varchar', length: 128, nullable: false })
  public name: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public identifier: string;

  @Column(() => ExtendedAddress)
  public address: ExtendedAddress;

  @Column({ type: 'varchar', length: 512, nullable: true })
  public website: string;

  @ManyToMany(() => Document, { nullable: true })
  @JoinTable({ name: 'supplier_documents' })
  public docs: Document[];
}
