import { Max } from 'class-validator';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { BaseTypeEntity } from './base.type.entity';
import { Driver } from './driver.entity';
import { DriverGroup } from './driver.group.entity';
import { User } from './user.entity';

export enum DriverAutoViolation {
  UNCLEAR = 'unclear',
  OVER_SPEED = 'over_speed',
  IDLING = 'idling',
  UNDER_SPEED = 'under_speed',
  HARSH_DRIVING = 'harsh_driving',
}

@Entity({ name: 'drv_violation_types' })
export class ViolationType extends BaseTypeEntity {
  @Column({ type: 'int', default: 0 })
  @Max(10)
  public point: number;
}

@Entity({ name: 'drv_vio_thresholds' })
export class DriverViolationTreshhold extends BaseTaggedEntity {
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
  public description: string;
}

@Entity({ name: 'driver_violations' })
export class DriverViolation extends BaseTaggedEntity {
  @OneToOne(() => Driver)
  @JoinColumn()
  public driver: DriverGroup;

  @OneToOne(() => Driver)
  @JoinColumn()
  public group: DriverGroup;

  @OneToOne(() => ViolationType)
  @JoinColumn()
  public type: ViolationType;

  @Column({ type: 'int', default: 0 })
  @Max(10)
  public point: number;

  @Column({ type: 'text', nullable: true })
  public remarks: string;

  @Column({ type: 'int', default: 0 })
  public amount: number;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;
}
