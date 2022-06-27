import { Column, Entity } from 'typeorm';
import { BaseTimedEntity } from './base.timed.entity';

@Entity({ name: 'cust_group' })
export class CustomerGroup extends BaseTimedEntity {
  @Column({ default: false })
  public default: boolean;

  @Column({ default: true })
  public selfManage: boolean;

  @Column({ default: true })
  public billable: boolean;

  @Column({ default: true })
  public enableTrip: boolean;

  @Column({ default: false })
  public autoRoute: boolean;

  @Column({ default: false })
  public autoOrder: boolean;

  @Column({ default: false })
  public autoInvoice: boolean;

  @Column({ default: false })
  public autoRouteCost: boolean;

  @Column({ default: false })
  public verifyOTP: boolean;

  @Column({ default: false })
  public autoZoneOTP: boolean;

  @Column({ type: 'varchar', length: 512, nullable: true })
  public description!: string;
}
