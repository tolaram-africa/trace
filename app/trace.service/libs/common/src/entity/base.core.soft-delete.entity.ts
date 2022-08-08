import { DeleteDateColumn } from 'typeorm';
import { CoreEntity } from './base.core.entity';

export abstract class CoreDeleteEntity extends CoreEntity {
  @DeleteDateColumn({
    type: 'timestamptz',
    nullable: true,
  })
  public deletedAt!: Date;
}
