import { OneToOne, JoinColumn, Column, Entity } from 'typeorm';
import { DriverGroup } from './driver.group.entity';
import { User } from './user.entity';
import { TagEntity } from './base.tagged.entity';
import { Driver } from './driver.entity';
import { PaymentRequest } from './payment.request.entity';

@Entity({ name: 'driver_payments' })
export class driverPayment extends TagEntity {
  @OneToOne(() => Driver)
  @JoinColumn()
  public driver: DriverGroup;

  @OneToOne(() => Driver)
  @JoinColumn()
  public group: DriverGroup;

  @Column({ type: 'int', default: 0 })
  public amountRequested: number;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;

  @OneToOne(() => PaymentRequest, { nullable: true })
  @JoinColumn()
  payment: PaymentRequest;
}
