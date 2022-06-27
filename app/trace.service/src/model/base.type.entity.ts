import { Column } from 'typeorm';
import { BaseEntity } from './base.entity';

export abstract class BaseTypeEntity extends BaseEntity {
  @Column({ default: false })
  public default: boolean;

  @Column({ type: 'varchar', length: 128, nullable: false })
  public name: string;

  @Column({ type: 'varchar', length: 512, nullable: true })
  public notes!: string;
}
