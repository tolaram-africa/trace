import { ServiceLevel } from '@/common/entity/enum.base';
import { Column, JoinColumn, OneToOne } from 'typeorm';
import { CoreDeleteEntity } from '@/common/entity/base.core.soft-delete.entity';
import { SubscriptionTier } from '@/module/subscription/entity/subscription.entity';

export abstract class BaseSubscription extends CoreDeleteEntity {
  @OneToOne(() => SubscriptionTier)
  @JoinColumn()
  public tier: SubscriptionTier;

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
