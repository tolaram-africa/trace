import { TenantIntegration } from './tenant.integration.entity';
import { BaseEntity } from './base.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity({ name: 'tenant_integration_configs' })
export class TenantIntegrationConfig extends BaseEntity {
  @OneToOne(() => TenantIntegration)
  @JoinColumn()
  public integration: TenantIntegration;

  @Column({ type: 'jsonb', default: {} })
  public keys: string;
}
