import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { BaseAddress } from './base.address.entity';
import { BaseTimedEntity } from './base.timed.entity';
import { Document } from './document.entity';
import { User } from './user.entity';

@Entity({ name: 'suppliers' })
export class Supplier extends BaseTimedEntity {
  @OneToOne(() => User)
  @JoinColumn()
  public contact: User;

  @Column({ type: 'varchar', length: 128, nullable: false })
  public name: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public identifier: string;

  @Column(() => BaseAddress)
  public address: BaseAddress;

  @Column({ type: 'varchar', length: 512, nullable: true })
  public website: string;

  @ManyToMany(() => Document, { nullable: true })
  @JoinTable({ name: 'supplier_documents' })
  public docs: Document[];
}
