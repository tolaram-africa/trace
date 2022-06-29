import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { AlertType } from '@/common/entity/enum.base';
import { User } from '@/module/user/entity/user.entity';
import { SystemFeature } from '@/module/system/entity/system.feature.entity';
import { TenantEntity } from '@/common/entity/base.tenant.entity';

@Entity({ name: 'user_alerts' })
export class UserAlert extends TenantEntity {
  @ManyToOne(() => User, (user) => user.alerts, { onDelete: 'CASCADE' })
  @JoinColumn()
  public user: User;

  @Column({ type: 'int', default: 1 })
  public repeatInterval!: number;

  @Column({ default: false })
  public schedule: boolean;

  @OneToOne(() => SystemFeature, { onDelete: 'CASCADE' })
  @JoinColumn()
  public module: SystemFeature;

  @Column({
    type: 'enum',
    enum: AlertType,
    array: true,
    default: [AlertType.EMAIL],
  })
  public channels: AlertType[];
}
