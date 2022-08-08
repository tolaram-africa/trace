import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { Driver } from './driver.entity';
import { DriverGroup } from './driver.group.entity';
import { Order } from '@/module/order/entity/order.entity';
import { User } from '@/module/user/entity/user.entity';

@Entity({ name: 'driver_incentives' })
export class DriverIncentive extends TagEntity {
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
  public amountCalculated: number;

  @Column({ type: 'int', default: 0, nullable: true })
  public amountPayed!: number;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @Column({ nullable: true })
  public approvedById!: string;

  @Column({ type: 'timestamptz', nullable: true })
  public approvedAt!: Date;

  @Column({ type: 'interval' })
  public totalHours: number;

  @ManyToMany(() => Order, { nullable: true })
  @JoinTable({ name: 'driver_incentives_orders' })
  public orders!: Order[];
}
