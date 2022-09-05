import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { User } from '@/module/user/entity/user.entity';
import { File } from '@/module/file/entity/file.entity';
import { SoftDeleteEntity } from '@/common/entity';
import { InsurancePlanStatus } from './insurance.type';
import { InsurancePolicy } from './insurance.policy.entity';
import { InsuranceCategory } from './insurance.category.entity';

@Entity('insurance_plans')
export class InsurancePlan extends SoftDeleteEntity {
  @Column({
    type: 'enum',
    enum: InsurancePlanStatus,
    default: InsurancePlanStatus.PENDING,
  })
  public status: InsurancePlanStatus;

  @Column({ type: 'varchar', length: 5, nullable: true })
  public version!: string;

  @Column({ type: 'int', default: 1 })
  public quantity: number;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy!: User;

  @Column({ nullable: true })
  public approvedById!: string;

  @OneToOne(() => InsuranceCategory)
  @JoinColumn()
  public category: InsuranceCategory;

  @Column({ nullable: true })
  public categoryId!: string;

  @OneToOne(() => InsurancePolicy)
  @JoinColumn()
  public policy: InsurancePolicy;

  @Column({ nullable: true })
  public policyId!: string;

  @Column({ type: 'float', default: 0 })
  public price!: number;

  @Column({ type: 'text', nullable: true })
  public notes!: string;

  @Column({ type: 'date', nullable: true })
  public startAt!: Date;

  @Column({ type: 'date', nullable: true })
  public endAt!: Date;

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'insurance_plan_files' })
  public files!: File[];
}