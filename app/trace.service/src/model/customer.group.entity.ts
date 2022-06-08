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

  @Column()
  public tripType: string;

  @Column({ default: false })
  public autoOrder: boolean;

  @Column({ default: false })
  public autoInvoice: boolean;

  @Column({ type: 'text', nullable: true })
  public description!: string;
}
