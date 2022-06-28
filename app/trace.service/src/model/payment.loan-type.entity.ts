import { Column, Entity } from 'typeorm';
import { TypeEntity } from '@/common/entity/base.type.entity';

@Entity({ name: 'payment_loan_types' })
export class PaymentLoanType extends TypeEntity {
  @Column({ type: 'int', default: 0, nullable: false })
  public percentage: number;
}
