import { Entity } from 'typeorm';
import { TypeEntity } from './base.type.entity';

@Entity('insurance_claim_reasons')
export class InsuranceClaimReason extends TypeEntity {}
