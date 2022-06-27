import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Tenant } from './tenant.entity';
import { CoreTimeEntity } from './base.core-timed.entity';

@Entity({ name: 'tenant_domains' })
export class TenantDomain extends CoreTimeEntity {
  @Column({ default: false })
  public default: boolean;

  @ManyToOne(() => Tenant, (tenant) => tenant.domains)
  @JoinColumn()
  public tenant: Tenant;

  @Column({ type: 'varchar', length: 255, nullable: false })
  public domain: string;

  @Column({ default: false })
  public verified: boolean;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public expires: Date;
}
