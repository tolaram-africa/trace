import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { Driver } from './driver.entity';
import { DriverGroup } from './driver.group.entity';
import { DriverViolationTreshold } from './driver.violation.threshold.entity';
import { ViolationType } from './driver.violation.type.entity';
import { Payment } from '@/module/payment/entity/payment.entity';
import { User } from '@/module/user/entity/user.entity';

export enum DriverAutoViolation {
  UNCLEAR = 'unclear',
  OVER_SPEED = 'over_speed',
  IDLING = 'idling',
  UNDER_SPEED = 'under_speed',
  HARSH_DRIVING = 'harsh_driving',
  RESTRICTED_PARKING = 'restricted_parking',
}

@Entity({ name: 'driver_violations' })
export class DriverViolation extends TagEntity {
  @OneToOne(() => Driver)
  @JoinColumn()
  public driver: DriverGroup;

  @Column({ nullable: true })
  public driverId!: string;

  @OneToOne(() => Driver)
  @JoinColumn()
  public group: DriverGroup;

  @Column({ nullable: true })
  public groupId!: string;

  @OneToOne(() => ViolationType)
  @JoinColumn()
  public type: ViolationType;

  @Column({ nullable: true })
  public typeId!: string;

  @OneToOne(() => DriverViolationTreshold, { nullable: true })
  @JoinColumn()
  public threshold!: DriverViolationTreshold;

  @Column({ nullable: true })
  public thresholdId!: string;

  @Column({ type: 'int', default: 0 })
  public point: number;

  @Column({ type: 'text', nullable: true })
  public remarks!: string;

  @Column({ type: 'int', default: 0 })
  public amountSurcharged: number;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;

  @Column({ nullable: true })
  public approvedById!: string;

  @OneToOne(() => Payment, { nullable: true })
  @JoinColumn()
  public payment!: Payment;

  @Column({ nullable: true })
  public paymentId!: string;
}
