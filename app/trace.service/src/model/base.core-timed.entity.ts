import { Column } from 'typeorm';
import { CoreEntity } from './base.core.entity';
import { TimeEmbed } from './base.time.embed';

export abstract class CoreDeleteEntity extends CoreEntity {
  @Column(() => TimeEmbed)
  public time: TimeEmbed;
}
