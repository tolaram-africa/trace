import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { TenantEntity } from '@/common/entity/base.tenant.entity';
import { SystemFeature } from '@/module/system/entity/system.feature.entity';
import { Customer } from '@/module/customer/entity/customer.entity';

@Entity({ name: 'events' })
export class Event extends TenantEntity {
  @Column({ type: 'varchar', length: 128, nullable: false })
  public type: string;

  @OneToOne(() => SystemFeature)
  @JoinColumn()
  public feature: SystemFeature;

  @Column({ nullable: true })
  public featureId!: string;

  @Column({ type: 'jsonb', nullable: true })
  public users!: Record<string, unknown>;

  @OneToOne(() => Customer, { nullable: true })
  @JoinColumn()
  public customer!: Customer;

  @Column({ nullable: true })
  public customerId!: string;

  @Column({ type: 'jsonb', default: {}, nullable: true })
  public payload!: string;
}
