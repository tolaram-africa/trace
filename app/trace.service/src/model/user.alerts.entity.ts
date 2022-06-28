import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { AlertType } from './enum.base';
import { User } from './user.entity';
import { SystemFeature } from './system.module.entity';
import { TenantEntity } from './base.entity';

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
