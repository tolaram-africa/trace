import { Entity, Column } from 'typeorm';
import { TypeEntity } from '@/common/entity/base.type.entity';

@Entity({ name: 'driver_violation_types' })
export class ViolationType extends TypeEntity {
  @Column({ type: 'int', default: 0 })
  public maxPoint: number;
}
