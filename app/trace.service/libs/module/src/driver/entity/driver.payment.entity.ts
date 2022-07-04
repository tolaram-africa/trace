import { OneToOne, JoinColumn, Column, Entity } from 'typeorm';
import { DriverGroup } from './driver.group.entity';
import { User } from '@/module/user/entity/user.entity';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { Driver } from './driver.entity';
import { PaymentRequest } from '@/module/payment/entity/payment.request.entity';

@Entity({ name: 'driver_payments' })
export class DriverPayment extends TagEntity {
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

  @Column({ type: 'int', default: 0 })
  public amountRequested: number;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;

  @Column({ nullable: true })
  public approvedById!: string;

  @OneToOne(() => PaymentRequest, { nullable: true })
  @JoinColumn()
  payment: PaymentRequest;

  @Column({ nullable: true })
  public paymentId!: string;
}
