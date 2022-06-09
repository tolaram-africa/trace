import { Max } from 'class-validator';
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
import { SizeUnit } from './enum.base';
import { User } from './user.entity';
import { Document } from './document.entity';
import { Product } from './product.entity';
import { BaseTypeEntity } from './base.type.entity';

export enum SettleIndividual {
  DRIVER = 'driver',
  DRIVER_GROUP = 'driver_group',
  CUSTOMER = 'customer',
  TENANT = 'tenant',
  WAREHOUSE = 'warehouse',
  INSURANCE = 'insurance',
  ALL = 'all',
}

@Entity({ name: 'shortage_settle_types' })
export class ShortageSettleType extends BaseTypeEntity {}

@Entity({ name: 'shortage_types' })
export class ShortageType extends BaseTypeEntity {}

@Entity({ name: 'shortages' })
export class Shortage extends BaseTaggedEntity {
  @OneToOne(() => Product)
  @JoinColumn()
  public product: Product;

  // order: Order;
  // freight: Freight;

  @Column({
    type: 'enum',
    enum: SettleIndividual,
    default: [SettleIndividual.DRIVER],
    nullable: true,
    array: true,
  })
  public settlementBy!: SettleIndividual[];

  @OneToOne(() => Driver)
  @JoinColumn()
  public driver: DriverGroup;

  @OneToOne(() => Driver)
  @JoinColumn()
  public group: DriverGroup;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;

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

  @ManyToMany(() => Document)
  @JoinTable({ name: 'shortage_docs' })
  public documents!: Document[];
}
