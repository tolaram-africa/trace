import { TenantEntity } from '@/common/entity/base.tenant.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'tenant_email_configs' })
export class TenantEmailConfig extends TenantEntity {
  @Column({ type: 'varchar', length: 512, nullable: false })
  public username: string;

  @Column({ type: 'varchar', length: 512, nullable: false })
  public from: string;

  @Column({ type: 'varchar', length: 512, nullable: false })
  public password: string;

  @Column({ type: 'int', default: 587 })
  public port: number;

  @Column({ type: 'varchar', length: 512, nullable: false })
  public host: string;

  @Column({ default: false })
  public ssl: boolean;

  @Column({ default: true })
  public tls: boolean;
}
