import { Column, Entity, Generated, JoinColumn, OneToOne } from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { Customer } from '@/module/customer/entity/customer.entity';
import { TripPassReason } from './order.trip-pass.reason.entity';
import { User } from '@/module/user/entity/user.entity';
import { DriverGroup } from '@/module/driver/entity/driver.group.entity';
import { Driver } from '@/module/driver/entity/driver.entity';
import { Order } from './order.entity';

@Entity({ name: 'order_trip_passes' })
export class OrderTripPass extends TagEntity {
  @Generated()
  @Column({ unique: true })
  public identifier!: number;

  @OneToOne(() => Order, { nullable: false })
  @JoinColumn()
  public order: Order;

  @Column({ nullable: true })
  public orderId!: string;

  @OneToOne(() => TripPassReason, { nullable: false })
  @JoinColumn()
  public reason: TripPassReason;

  @Column({ nullable: true })
  public reasonId!: string;

  @OneToOne(() => Customer, { nullable: true })
  @JoinColumn()
  public customer!: Customer;

  @Column({ nullable: true })
  public customerId!: string;

  @OneToOne(() => Driver, { nullable: true })
  @JoinColumn()
  public driver!: Driver;

  @Column({ nullable: true })
  public driverId!: string;

  @OneToOne(() => DriverGroup, { nullable: true })
  @JoinColumn()
  public driverGroup!: DriverGroup;

  @Column({ nullable: true })
  public driverGroupId!: string;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @Column({ nullable: true })
  public approvedById!: string;

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
