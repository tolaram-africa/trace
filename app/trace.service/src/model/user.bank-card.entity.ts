import { Column, Entity } from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';

export enum BankCardType {
  MASTERCARD = 'mastercard',
  VISA = 'visa',
}

@Entity({ name: 'user_bank_cards' })
export class BankCard extends SoftDeleteEntity {
  @Column({
    type: 'enum',
    enum: BankCardType,
    nullable: false,
    default: BankCardType.MASTERCARD,
  })
  public type: BankCardType;
}
