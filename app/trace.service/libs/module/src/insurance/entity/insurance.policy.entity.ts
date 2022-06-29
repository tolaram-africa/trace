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
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { InsuranceProvider } from './insurance.provider.entity';

@Entity('insurance_policies')
export class InsurancePolicy extends SoftDeleteEntity {
  @Column({ default: false })
  public active: boolean;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public identifier!: string;

  @Column({ type: 'varchar', length: 5, nullable: true })
  public version!: string;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy!: User;

  @OneToOne(() => InsuranceProvider)
  @JoinColumn()
  public provider: InsuranceProvider;

  @Column({ type: 'float', default: 0 })
  public percentage!: number;

  @Column({ type: 'float', default: 0 })
  public premium!: number;

  @Column({
    type: 'bigint',
    default: 0,
    nullable: true,
  })
  public duration!: number;

  @Column({ type: 'text', nullable: true })
  public notes!: string;

  @Column({ type: 'date', nullable: true })
  public expiry!: Date;

  @ManyToMany(() => Document, { nullable: true })
  @JoinTable({ name: 'insurance_policy_docs' })
  public docs!: Document[];
}
