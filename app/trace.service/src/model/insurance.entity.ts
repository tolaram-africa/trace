import { Column, Entity } from 'typeorm';
import { TypeEntity } from '@/common/entity/base.type.entity';

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
