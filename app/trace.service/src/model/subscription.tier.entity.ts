import { Entity, Column } from 'typeorm';
import { SoftDeleteEntity } from './base.soft-delete.entity';
import { ServiceLevel } from './enum.base';

@Entity({ name: 'subscription_tier' })
export class SubscriptionsTier extends SoftDeleteEntity {
  @Column({ default: false })
  public default: boolean;

  @Column({
    type: 'enum',
    enum: ServiceLevel,
    array: true,
    default: [ServiceLevel.CUSTOMER],
    nullable: true,
  })
  public level: ServiceLevel[];

  @Column({ type: 'int', nullable: false, default: 0 })
  public cost: number;

  @Column({ type: 'int', nullable: false, default: 0 })
  public period: number;

  @Column({ type: 'int', nullable: false, default: 0 })
  public maxUsers: number;

  @Column({ type: 'int', nullable: false, default: 0 })
  public maxVehicles: number;

  @Column({ type: 'int', nullable: false, default: 0 })
  public maxTrailers: number;

  @Column({ type: 'int', nullable: false, default: 0 })
  public maxCustomers: number;

  @Column({ type: 'int', nullable: false, default: 0 })
  public maxLocations: number;

  @Column({ type: 'int', nullable: false, default: 0 })
  public maxRoutes: number;

  @Column({ type: 'int', nullable: false, default: 0 })
  public maxPayments: number;

  @Column({ type: 'int', nullable: false, default: 0 })
  public maxDocument: number;
}
