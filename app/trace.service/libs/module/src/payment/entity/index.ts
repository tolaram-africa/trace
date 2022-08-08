export * from './payment.bank-account.entity';
export * from './payment.entity';
export * from './payment.loan-request.entity';
export * from './payment.loan-type.entity';
export * from './payment.loan.entity';
export * from './payment.request.entity';
export * from './payment.transcation-account.entity';
export * from './payment.type.entity';

import {
  Payment,
  PaymentType,
  PaymentLoanRequest,
  PaymentLoan,
  PaymentLoanType,
  BankAccount,
  TransactionAccount,
} from '@/module/payment/entity';

export const PaymentModuleEntity = [
  Payment,
  PaymentType,
  PaymentLoanRequest,
  PaymentLoan,
  PaymentLoanType,
  BankAccount,
  TransactionAccount,
];
