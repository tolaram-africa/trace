import { OneToOne, JoinColumn, Entity, Index, Column } from 'typeorm';
import { BaseSetting } from '@/module/tenant/entity';
import { Customer } from './';
import { Tenant } from '@/module/tenant/entity';

@Entity({ name: 'customer_settings' })
export class CustomerSetting extends BaseSetting {
  @Index('idx_customer_settings_custid')
  @OneToOne(() => Customer, (customer) => customer.setting, { nullable: true })
  @JoinColumn()
  public customer!: Customer;

  @Column({ nullable: true })
  public customerId: string;

  @OneToOne(() => Tenant)
  @JoinColumn()
  public tenant: Tenant;

  @Column({ nullable: true })
  public tenantId: string;
}
