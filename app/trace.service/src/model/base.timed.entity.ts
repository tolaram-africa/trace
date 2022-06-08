import { BaseEntity } from './base.entity';
import { UpdateDateColumn, CreateDateColumn, DeleteDateColumn } from 'typeorm';

export abstract class BaseTimedEntity extends BaseEntity {
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  public created: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    nullable: true,
  })
  public updated!: Date;

  @DeleteDateColumn({
    type: 'timestamptz',
    nullable: true,
  })
  public deleted: Date;
}
