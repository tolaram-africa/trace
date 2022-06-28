import { Column, Entity, Generated, JoinColumn, OneToOne } from 'typeorm';
import { TagEntity } from './base.tagged.entity';
import { Customer } from './customer.entity';
import { TripPassReason } from './order.trip-pass.reason.entity';
import { User } from './user.entity';
import { DriverGroup } from './driver.group.entity';
import { Driver } from './driver.entity';
import { Order } from './order.entity';

@Entity({ name: 'order_trip_passes' })
export class OrderTripPass extends TagEntity {
  @Generated()
  @Column({ unique: true })
  public identifier: number;

  @OneToOne(() => Order, { nullable: false })
  @JoinColumn()
  public order: Order;

  @OneToOne(() => TripPassReason, { nullable: false })
  @JoinColumn()
  public reason: TripPassReason;

  @OneToOne(() => Customer, { nullable: true })
  @JoinColumn()
  public customer!: Customer;

  @OneToOne(() => Driver, { nullable: true })
  @JoinColumn()
  public driver!: Driver;

  @OneToOne(() => DriverGroup, { nullable: true })
  @JoinColumn()
  public driverGroup!: DriverGroup;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public approvedAt!: Date;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public resovedAt!: Date;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  public notes!: string;
}
