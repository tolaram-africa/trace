import { Column, Entity } from 'typeorm';
import { BaseTypeEntity } from './base.type.entity';

@Entity({ name: 'payment_loan_types' })
export class PaymentLoanType extends BaseTypeEntity {
  @Column({ type: 'int', default: 0, nullable: false })
  public percentage: number;
}
