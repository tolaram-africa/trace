import { Tenant } from '@root/src/model/tenant.entity';
import { Column, JoinColumn, OneToOne } from 'typeorm';
import { CoreEntity } from './base.core.entity';

export abstract class TenantEntity extends CoreEntity {
  @Column({ type: 'varchar', length: 128, nullable: true })
  public createdBy!: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public updatedBy!: string;

  @OneToOne(() => Tenant, { nullable: true })
  @JoinColumn()
  public tenant!: Tenant;
}
