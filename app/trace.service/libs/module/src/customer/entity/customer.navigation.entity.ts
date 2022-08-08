import { Tenant } from '@/module/tenant/entity/tenant.entity';
import { Column, Entity, JoinColumn, OneToOne, RelationId } from 'typeorm';
import { BaseNavigationOption } from '@/module/tenant/entity/base.navigation-option.entity';
import { Customer } from './customer.entity';

@Entity({ name: 'customer_nav_options' })
export class CustomerNavigation extends BaseNavigationOption {
  @OneToOne(() => Tenant, {
    nullable: true,
    onDelete: 'SET NULL',
    orphanedRowAction: 'nullify',
  })
  @JoinColumn()
  public tenant!: Tenant;

  @RelationId((item: CustomerNavigation) => item.tenant)
  @Column({ type: 'uuid', nullable: true })
  public tenantId!: string;

  @OneToOne(() => Customer, (tenant) => tenant.navigation, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  public customer: Customer;

  @RelationId((item: CustomerNavigation) => item.customer)
  public customerId!: string;
}
