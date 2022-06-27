import { Column, Entity } from 'typeorm';
import { BaseTimedEntity } from './base.timed.entity';

export enum BankCardType {
  MASTERCARD = 'mastercard',
  VISA = 'visa',
}

@Entity({ name: 'user_bank_cards' })
export class BankCard extends BaseTimedEntity {
  @Column({
    type: 'enum',
    enum: BankCardType,
    nullable: false,
    default: BankCardType.MASTERCARD,
  })
  public type: BankCardType;
}
