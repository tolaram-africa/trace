import { Entity, Column } from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { DriverAutoViolation } from './driver.violation.entity';

@Entity({ name: 'driver_violation_thres' })
export class DriverViolationTreshold extends TagEntity {
  @Column({ type: 'varchar', length: 128 })
  public name: string;

  @Column({
    type: 'enum',
    enum: DriverAutoViolation,
    default: DriverAutoViolation.UNCLEAR,
  })
  public type: DriverAutoViolation;

  @Column({ type: 'int', default: 0 })
  public percentage!: number;

  @Column({ type: 'int', default: 0 })
  public value!: number;

  @Column({ type: 'text', nullable: true })
  public notes!: string;
}
