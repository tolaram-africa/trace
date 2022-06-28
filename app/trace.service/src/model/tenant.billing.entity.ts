import { SoftDeleteEntity } from './base.timed.entity';
import { TenantInvoice } from './tenant.invoice.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity({ name: 'tenant_bills' })
export class TenantBill extends SoftDeleteEntity {
  @Column({ default: false })
  public paid: boolean;

  @Column({ type: 'int', nullable: false, default: 0 })
  public amount: number;

  @OneToOne(() => TenantInvoice)
  @JoinColumn()
  public invoice: TenantInvoice;
}
