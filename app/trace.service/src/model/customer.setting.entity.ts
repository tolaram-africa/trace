import { OneToOne, JoinColumn, Entity, Index, Column } from 'typeorm';
import { BaseSetting } from './base.profile-setting.entity';
import { Customer } from './customer.entity';

@Entity({ name: 'customer_settings' })
export class CustomerSetting extends BaseSetting {
  @Index('idx_customer_settings_custid')
  @OneToOne(() => Customer, (user) => user.setting)
  @JoinColumn()
  public customer: Customer;

  @Column({ default: true })
  public enableTrip: boolean;

  @Column({ default: false })
  public autoRoute: boolean;

  @Column({ default: false })
  public autoOrder: boolean;

  @Column({ default: false })
  public autoRouteCost: boolean;

  @Column({ default: false })
  public autoInvoice: boolean;

  @Column({ default: false })
  public verifyOTP: boolean;

  @Column({ default: false })
  public autoZoneOTP: boolean;
}
