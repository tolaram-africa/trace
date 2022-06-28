import { ServiceLevel } from './enum.base';
import { Column, JoinColumn, OneToOne } from 'typeorm';
import { SubscriptionsTier } from './subscription.tier.entity';
import { CoreDeleteEntity } from './base.core-timed.entity';

export abstract class BaseSubscription extends CoreDeleteEntity {
  @OneToOne(() => SubscriptionsTier)
  @JoinColumn()
  public tier: SubscriptionsTier;

  @Column({
    type: 'enum',
    enum: ServiceLevel,
    default: ServiceLevel.CUSTOMER,
    nullable: true,
  })
  public level!: ServiceLevel;

  @Column({ default: false })
  public active: boolean;

  @Column({
    type: 'timestamptz',
    nullable: false,
  })
  public start: Date;

  @Column({
    type: 'timestamptz',
    nullable: false,
  })
  public end: Date;
}
