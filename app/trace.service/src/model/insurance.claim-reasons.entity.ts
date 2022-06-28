import { Entity } from 'typeorm';
import { BaseTypeEntity } from './base.type.entity';

@Entity('insurance_claim_reasons')
export class InsuranceClaimReason extends BaseTypeEntity {}
