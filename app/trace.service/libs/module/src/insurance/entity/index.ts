export * from './insurance.category.entity';
export * from './insurance.claim-reasons.entity';
export * from './insurance.claim.entity';
export * from './insurance.type';
export * from './insurance.plan.entity';
export * from './insurance.policy.entity';
export * from './insurance.provider.entity';

import {
  InsuranceCategory,
  InsuranceClaimReason,
  InsuranceClaim,
  InsurancePlan,
  InsurancePolicy,
  InsuranceProvider,
} from './';

export const InsuranceModuleEntity = [
  InsuranceCategory,
  InsuranceClaimReason,
  InsuranceClaim,
  InsurancePlan,
  InsurancePolicy,
  InsuranceProvider,
];
