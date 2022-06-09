import { Column } from 'typeorm';
import { BaseEntity } from './base.entity';

export abstract class BaseTypeEntity extends BaseEntity {
  @Column({ default: false })
  public default: boolean;

  @Column()
  public name: string;

  @Column({ type: 'text', nullable: true })
  public description!: string;
}
