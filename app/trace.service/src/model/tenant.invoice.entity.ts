import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { User } from './user.entity';
import { BaseTimedEntity } from './base.timed.entity';
import { TenantBill } from './tenant.billing.entity';
import { ServiceLevel } from './enum.base';
import { TenantPayProvider } from './tenant.pay-provider.entity';
import { TenantSubscription } from './tenant.subscription.entity';

@Entity({ name: 'tenant_invoices' })
export class TenantInvoice extends BaseTimedEntity {
  @OneToOne(() => TenantSubscription)
  @JoinColumn()
  public subscription: TenantSubscription;

  @OneToOne(() => TenantBill)
  @JoinColumn()
  public billing: TenantBill;

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

  @Column({ type: 'varchar', length: 128, nullable: true })
  public paymentRefrence!: string;
}
