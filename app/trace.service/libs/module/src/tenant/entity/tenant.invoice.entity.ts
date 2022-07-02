import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { TenantBill } from './tenant.billing.entity';
import { ServiceLevel } from '@/common/entity/enum.base';
import { TenantPayProvider } from './tenant.pay-provider.entity';
import { TenantSubscription } from './tenant.subscription.entity';
import { User } from '@/module/user/entity/user.entity';

@Entity({ name: 'tenant_invoices' })
export class TenantInvoice extends SoftDeleteEntity {
  @OneToOne(() => TenantSubscription)
  @JoinColumn()
  public subscription: TenantSubscription;

  @Column({ nullable: true })
  public subscriptionId!: string;

  @OneToOne(() => TenantBill)
  @JoinColumn()
  public billing: TenantBill;

  @Column({ nullable: true })
  public billingId!: string;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public completed: Date;

  @Column({ type: 'text', nullable: true })
  public amount: number;

  @Column({ type: 'int', default: 0 })
  public paidAmount: number;

  @Column({ type: 'text', nullable: true })
  public description!: string;

  @OneToOne(() => User)
  @JoinColumn()
  public paidBy: User;

  @Column({
    type: 'enum',
    enum: ServiceLevel,
    array: true,
    default: [ServiceLevel.DIRECT],
  })
  public paidFor: ServiceLevel[];

  @OneToOne(() => TenantPayProvider)
  @JoinColumn()
  public paymentProvider!: TenantPayProvider;

  @Column({ nullable: true })
  public paymentProviderId: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public paymentRefrence!: string;
}
