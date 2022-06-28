import { Max } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { TagEntity } from './base.tag.entity';
import { Driver } from './driver.entity';
import { DriverGroup } from './driver.group.entity';
import { SizeUnit } from './enum.base';
import { User } from './user.entity';
import { Document } from './document.entity';
import { TypeEntity } from './base.type.entity';
import { InsuranceClaim } from './insurance.claim.entity';
import { OrderFreight } from './order.freight.entity';
import { Order } from './order.entity';

export enum SettleIndividual {
  DRIVER = 'driver',
  DRIVER_GROUP = 'driver_group',
  CUSTOMER = 'customer',
  TENANT = 'tenant',
  WAREHOUSE = 'warehouse',
  INSURANCE = 'insurance',
}

@Entity({ name: 'shortage_settle_types' })
export class ShortageSettleType extends TypeEntity {}

@Entity({ name: 'shortage_types' })
export class ShortageType extends TypeEntity {}

@Entity({ name: 'shortages' })
export class Shortage extends TagEntity {
  @OneToOne(() => Order)
  @JoinColumn()
  public order: Order;

  @OneToOne(() => OrderFreight)
  @JoinColumn()
  public freight: OrderFreight;

  @Column({
    type: 'enum',
    enum: SettleIndividual,
    default: [SettleIndividual.DRIVER],
    nullable: true,
    array: true,
  })
  public settlementBy!: SettleIndividual[];

  @OneToOne(() => Driver, { nullable: true })
  @JoinColumn()
  public driver!: Driver;

  @OneToOne(() => Driver, { nullable: true })
  @JoinColumn()
  public group!: DriverGroup;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @Column({
    type: 'timestamptz',
    nullable: false,
  })
  public approvedTime: Date;

  @OneToOne(() => ShortageType)
  @JoinColumn()
  public type: ShortageType;

  @OneToOne(() => ShortageSettleType)
  @JoinColumn()
  public settleType!: ShortageSettleType;

  @OneToOne(() => InsuranceClaim)
  @JoinColumn()
  public insuranceClaim!: InsuranceClaim;

  @Column({ type: 'int', nullable: false, default: 1 })
  public quantity: number;

  @Column({
    type: 'enum',
    enum: SizeUnit,
    default: SizeUnit.KILOGRAM,
    nullable: true,
  })
  public unit: SizeUnit;

  @Column({ type: 'int', nullable: true, default: 0 })
  public cost: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  @Max(100)
  public costPercentage: number;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public completed!: Date;

  @ManyToMany(() => Document, { nullable: true })
  @JoinTable({ name: 'shortage_docs' })
  public docs!: Document[];
}
