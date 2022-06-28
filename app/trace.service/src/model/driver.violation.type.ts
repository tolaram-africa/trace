import { Entity, Column } from 'typeorm';
import { BaseTypeEntity } from './base.type.entity';

@Entity({ name: 'drv_violation_types' })
export class ViolationType extends BaseTypeEntity {
  @Column({ type: 'int', default: 0 })
  public maxPoint: number;
}
