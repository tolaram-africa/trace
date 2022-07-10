import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { User } from '@/module/user/entity/user.entity';
import { File } from '@/module/file/entity/file.entity';
import { TenantEntity } from '@/common/entity/base.tenant.entity';

@Entity('insurance_providers')
export class InsuranceProvider extends TenantEntity {
  @Column({ type: 'varchar', length: 128 })
  public name: string;

  @Generated()
  @Column({ unique: true })
  identifier: number;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @Column({ nullable: true })
  public approvedById!: string;

  @Column({ default: false })
  public active: boolean;

  @Column({ type: 'varchar', length: 1024, nullable: true })
  public address!: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  public phone!: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public contact!: string;

  @Column({ type: 'varchar', length: 512, nullable: true })
  public email!: string;

  @Column({ type: 'varchar', length: 512, nullable: true })
  public website!: string;

  @Column({ type: 'text', nullable: true })
  public notes!: string;

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'insurance_provider_files' })
  public files!: File[];
}
