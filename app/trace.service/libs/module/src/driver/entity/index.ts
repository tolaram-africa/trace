export * from './driver.entity';
export * from './driver.expense-plan.entity';
export * from './driver.expense-request.entity';
export * from './driver.expense-type.entity';
export * from './driver.expense.entity';
export * from './driver.group.entity';
export * from './driver.incentive.entity';
export * from './driver.payment.entity';
export * from './driver.permit.entity';
export * from './driver.rating.entity';
export * from './driver.review.comment.entity';
export * from './driver.review.entity';
export * from './driver.review.type.entity';
export * from './driver.violation.threshold.entity';
export * from './driver.violation.entity';
export * from './driver.violation.type.entity';

import {
  DriverExpensePlan,
  DriverExpenseRequest,
  DriverExpenseType,
  DriverExpense,
  DriverGroup,
  DriverIncentive,
  DriverPayment,
  DriverReview,
  DriverReviewType,
  DriverReviewComment,
  DriverPermit,
  DriverRating,
  DriverViolationTreshold,
  DriverViolation,
  ViolationType,
} from './';

export const DriverModuleEntity = [
  // Driver,
  DriverExpensePlan,
  DriverExpenseRequest,
  DriverExpenseType,
  DriverExpense,
  DriverGroup,
  DriverIncentive,
  DriverPayment,
  DriverReview,
  DriverReviewType,
  DriverReviewComment,
  DriverPermit,
  DriverRating,
  DriverViolationTreshold,
  DriverViolation,
  ViolationType,
];
