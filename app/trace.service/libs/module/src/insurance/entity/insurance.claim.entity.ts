import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { User } from '@/module/user/entity/user.entity';
import { File } from '@root/libs/module/src/file/entity/file.entity';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { InsuranceClaimStatus } from './insurance.entity';
import { InsurancePlan } from './insurance.plan.entity';
import { IssurableObject } from '@/common/entity/enum.object';
import { Payment } from '@/module/payment/entity/payment.entity';
import { InsuranceClaimReason } from './insurance.claim-reasons.entity';

@Entity('insurance_claims')
export class InsuranceClaim extends SoftDeleteEntity {
  @Column({
    type: 'enum',
    enum: InsuranceClaimStatus,
    default: InsuranceClaimStatus.PENDING,
  })
  public status: InsuranceClaimStatus;

  @ManyToMany(() => InsuranceClaimReason)
  @JoinTable({ name: 'insurance_claim_linked_reasons' })
  public reasons: InsuranceClaimReason[];

  @Column({ type: 'int', default: 1 })
  public quantity: number;

  @OneToOne(() => User)
  public approvedBy!: User;

  @OneToOne(() => User)
  public requestedBy!: User;

  @OneToOne(() => InsurancePlan)
  @JoinColumn()
  public plan: InsurancePlan;

  @Column({
    type: 'enum',
    enum: IssurableObject,
    default: IssurableObject.VEHICLE,
  })
  public objectType!: IssurableObject;

  @Column({ type: 'jsonb', default: {} })
  public object!: string;

  @Column({ type: 'float', default: 0 })
  public paymentRequeted!: number;

  @Column({ type: 'float', default: 0 })
  public paymentRecieved!: number;

  @OneToOne(() => Payment)
  @JoinColumn()
  public payment: Payment;

  @Column({ type: 'date' })
  public dateRequested!: Date;

  @Column({ type: 'date' })
  public dateClaimed!: Date;

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'insurance_claim_files' })
  public files!: File[];

  @Column({ type: 'text', nullable: true })
  public justification!: string;

  @Column({ type: 'text', nullable: true })
  public notes!: string;
}
