import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { Driver } from './driver.entity';
import { DriverGroup } from './driver.group.entity';
import { DriverViolationTreshhold } from './driver.violation.threshold';
import { ViolationType } from './driver.violation.type';
import { Payment } from '@/module/payment/entity/payment.entity';
import { User } from '@/module/user/entity/user.entity';

export enum DriverAutoViolation {
  UNCLEAR = 'unclear',
  OVER_SPEED = 'over_speed',
  IDLING = 'idling',
  UNDER_SPEED = 'under_speed',
  HARSH_DRIVING = 'harsh_driving',
}

@Entity({ name: 'driver_violations' })
export class DriverViolation extends TagEntity {
  @OneToOne(() => Driver)
  @JoinColumn()
  public driver: DriverGroup;

  @OneToOne(() => Driver)
  @JoinColumn()
  public group: DriverGroup;

  @OneToOne(() => ViolationType)
  @JoinColumn()
  public type: ViolationType;

  @OneToOne(() => DriverViolationTreshhold, { nullable: true })
  @JoinColumn()
  public threshold!: DriverViolationTreshhold;

  @Column({ type: 'int', default: 0 })
  public point: number;

  @Column({ type: 'text', nullable: true })
  public remarks!: string;

  @Column({ type: 'int', default: 0 })
  public amountSurchared: number;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;

  @OneToOne(() => Payment, { nullable: true })
  @JoinColumn()
  public payment!: Payment;
}
