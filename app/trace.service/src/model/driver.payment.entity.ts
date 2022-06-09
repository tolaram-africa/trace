import { OneToOne, JoinColumn, Column, Entity } from 'typeorm';
import { DriverGroup } from './driver.group.entity';
import { User } from './user.entity';
import { BaseTaggedEntity } from './base.tagged.entity';
import { Driver } from './driver.entity';

@Entity({ name: 'driver_payments' })
export class driverPayment extends BaseTaggedEntity {
  @OneToOne(() => Driver)
  @JoinColumn()
  public driver: DriverGroup;

  @OneToOne(() => Driver)
  @JoinColumn()
  public group: DriverGroup;

  @Column({ type: 'int', default: 0 })
  public amount: number;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;

  // payment: Payment;
}
