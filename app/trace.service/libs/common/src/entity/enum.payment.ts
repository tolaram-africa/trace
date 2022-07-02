export enum PayTransactionType {
  PAYMENT = 'payment',
  LOAN = 'loan',
  LOAN_SETTLEMENT = 'loan_settlement',
  SHORTAGE_SETTLEMENT = 'shortage_settlement',
  EXPENSE = 'expense',
  REFUND = 'refund',
  COMPLETE_PAYMENT = 'complete_payment',
  REPAYMENT = 'repayment',
  REIMBURSEMENT = 'reimbursement',
}

export enum PaymentRequestStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  CANCELLED = 'cancelled',
  PAYED = 'payed',
}
