import { Column } from 'typeorm';
import { TenantEntity } from '@/common/entity/base.tenant.entity';
import { TimeEmbed } from './base.time.embed';

export abstract class SoftDeleteEntity extends TenantEntity {
  @Column(() => TimeEmbed)
  public time: TimeEmbed;
}
