import { Max } from 'class-validator';
import { Entity, Column } from 'typeorm';
import { TagEntity } from './base.tag.entity';
import { DriverAutoViolation } from './driver.violation';

@Entity({ name: 'drv_vio_thresholds' })
export class DriverViolationTreshhold extends TagEntity {
  @Column({
    type: 'enum',
    enum: DriverAutoViolation,
    default: DriverAutoViolation.UNCLEAR,
  })
  public type: DriverAutoViolation;

  @Column({ type: 'int', default: 0 })
  @Max(100)
  public percentage!: number;

  @Column({ type: 'int', default: 0 })
  @Max(10)
  public value!: number;

  @Column({ type: 'text', nullable: true })
  public description!: string;
}
