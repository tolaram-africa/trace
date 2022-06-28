import { Column } from 'typeorm';
import { TenantEntity } from './base.tenant.entity';
import { TimeEmbed } from './base.time.embed';

export abstract class SoftDeleteEntity extends TenantEntity {
  @Column(() => TimeEmbed)
  public time: TimeEmbed;
}
