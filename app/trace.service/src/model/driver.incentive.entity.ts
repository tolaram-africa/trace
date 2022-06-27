import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { Driver } from './driver.entity';
import { DriverGroup } from './driver.group.entity';
import { Order } from './order.entity';
import { User } from './user.entity';

@Entity({ name: 'driver_incentives' })
export class DriverIncentive extends BaseTaggedEntity {
  @OneToOne(() => Driver)
  @JoinColumn()
  public driver: DriverGroup;

  @OneToOne(() => Driver)
  @JoinColumn()
  public group: DriverGroup;

  @Column({ type: 'int', default: 0 })
  public amountCalculated: number;

  @Column({ type: 'int', default: 0, nullable: true })
  public amountPayed!: number;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @Column({ type: 'timestamptz', nullable: true })
  public approvedAt!: Date;

  @Column({ type: 'interval' })
  public totalHours: number;

  @ManyToMany(() => Order, { nullable: true })
  @JoinTable({ name: 'driver_incentives_orders' })
  public orders!: Order[];
}
