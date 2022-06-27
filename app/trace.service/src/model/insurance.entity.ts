import { Column, Entity } from 'typeorm';
import { BaseTypeEntity } from './base.type.entity';

export enum InsurancePlanStatus {
  PENDING = 'pending',
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  SUSPENDED = 'suspended',
}

export enum InsuranceClaimStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  CANCELLED = 'cancelled',
  RECEIVED = 'received',
}

@Entity('insurance_categories')
export class InsuranceCategory extends BaseTypeEntity {
  @Column({ type: 'float', default: 1.5, nullable: true })
  public percentage!: number;
}

@Entity('insurance_claim_reasons')
export class InsuranceClaimReason extends BaseTypeEntity {}
