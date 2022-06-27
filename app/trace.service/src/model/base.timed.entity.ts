import { Column } from 'typeorm';
import { BaseEntity } from './base.entity';
import { TimeEmbed } from './base.time.embed';

export abstract class BaseTimedEntity extends BaseEntity {
  @Column(() => TimeEmbed)
  public time: TimeEmbed;
}
