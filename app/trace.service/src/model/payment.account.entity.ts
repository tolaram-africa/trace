import { BaseTimedEntity } from './base.timed.entity';

export class PaymentAccount extends BaseTimedEntity {
  public name: string;
  public description!: string;
  public type: string;
  public currency: string;
  public balance: number;
  public balance_currency: string;
  public balance_date: Date;
  public balance_date_str: string;
}
