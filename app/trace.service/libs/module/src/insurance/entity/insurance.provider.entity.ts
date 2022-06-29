import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { User } from '@/module/user/entity/user.entity';
import { Document } from '@/module/document/entity/document.entity';
import { TenantEntity } from '@/common/entity/base.tenant.entity';

@Entity('insurance_providers')
export class InsuranceProvider extends TenantEntity {
  @Column({ type: 'varchar', length: 128 })
  public name: string;

  @Column({ type: 'varchar', length: 128, unique: true })
  identifier: string;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;

  @Column({ default: false })
  public active: boolean;

  @Column({ type: 'varchar', length: 1024, nullable: true })
  public address: string;

  @Column({ type: 'int' })
  public phone: number;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public contact: string;

  @Column({ type: 'varchar', length: 512, nullable: true })
  public email: string;

  @Column({ type: 'varchar', length: 512, nullable: true })
  public website: string;

  @Column({ type: 'text', nullable: true })
  public notes: string;

  @ManyToMany(() => Document, { nullable: true })
  @JoinTable({ name: 'insurance_provider_docs' })
  public docs!: Document[];
}
