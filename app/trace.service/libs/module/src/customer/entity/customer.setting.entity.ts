import { OneToOne, Entity, RelationId, Column, JoinColumn } from 'typeorm';
import { BaseSetting, Tenant } from '@/module/tenant/entity';
import { Customer } from './';

@Entity({ name: 'customer_settings' })
export class CustomerSetting extends BaseSetting {
  @OneToOne(() => Tenant, {
    nullable: true,
    onDelete: 'SET NULL',
    orphanedRowAction: 'nullify',
  })
  @JoinColumn()
  public tenant!: Tenant;

  @RelationId((item: CustomerSetting) => item.tenant)
  @Column({ type: 'uuid', nullable: true })
  public tenantId!: string;

  @OneToOne(() => Customer, (customer) => customer.setting, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  public customer: Customer;

  @RelationId((item: CustomerSetting) => item.customer)
  public customerId!: string;
}
