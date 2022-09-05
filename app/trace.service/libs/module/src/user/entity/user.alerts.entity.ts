import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { AlertType } from '@/common/entity/enum.base';
import { User } from '@/module/user/entity/user.entity';
import { SystemFeature } from '@/module/system/entity/system.feature.entity';
import { TenantEntity } from '@/common/entity/base.tenant.entity';

@Entity({ name: 'user_alerts' })
export class UserAlert extends TenantEntity {
  @Index('idx_user_alert_userid')
  @ManyToOne(() => User, (user) => user.alerts, { onDelete: 'CASCADE' })
  @JoinColumn()
  public user: User;

  @Column({ nullable: true })
  public userId!: string;

  @Column({ type: 'int', default: 1 })
  public repeatInterval!: number;

  @Column({ default: false })
  public schedule: boolean;

  @OneToOne(() => SystemFeature, { nullable: true })
  @JoinColumn()
  public feature!: SystemFeature;

  @Column({ nullable: true })
  public featureId!: number;

  @Column({
    type: 'enum',
    enum: AlertType,
    array: true,
    default: [AlertType.EMAIL],
  })
  public channels: AlertType[];
}