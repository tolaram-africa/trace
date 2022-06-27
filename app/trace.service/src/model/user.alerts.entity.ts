import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CoreEntity } from './base.core.entity';
import { AlertType } from './enum.base';
import { User } from './user.entity';

@Entity({ name: 'user_alerts' })
export class UserAlerts extends CoreEntity {
  @ManyToOne(() => User, (user) => user.alerts)
  @JoinColumn()
  public user: User;

  @Column()
  public repeatInterval!: number;

  @Column({ default: false })
  public schedule: boolean;

  @Column({ type: 'varchar', length: 75 })
  public module: string; // TODO: enum for modules

  @Column({
    type: 'enum',
    enum: AlertType,
    array: true,
    default: [AlertType.EMAIL],
  })
  public channels: AlertType[];
}
