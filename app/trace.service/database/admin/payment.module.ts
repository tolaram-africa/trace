import {
  Payment,
  PaymentRequest,
  PaymentType,
  PaymentLoanRequest,
  PaymentLoan,
  PaymentLoanType,
  BankAccount,
  TransactionAccount,
} from '@/module/payment/entity';
import { transformResources } from './util';

const payments = [
  Payment,
  PaymentRequest,
  PaymentType,
  PaymentLoanRequest,
  PaymentLoan,
  PaymentLoanType,
  BankAccount,
  TransactionAccount,
];
export const AdminPaymentModule = transformResources(payments, 'Payments');
