import { OneToOne, JoinColumn, Entity, Index } from 'typeorm';
import { BaseSetting } from '@/module/tenant/entity/base.profile-setting.entity';
import { Customer } from '@/module/customer/entity/customer.entity';

@Entity({ name: 'customer_settings' })
export class CustomerSetting extends BaseSetting {
  @Index('idx_customer_settings_custid')
  @OneToOne(() => Customer, (customer) => customer.setting, { nullable: true })
  @JoinColumn()
  public customer!: Customer;
}
