import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { Driver } from './driver.entity';
import { DriverGroup } from './driver.group.entity';
import { User } from './user.entity';

@Entity({ name: 'driver_incentives' })
export class DriverIncentive extends BaseTaggedEntity {
  @OneToOne(() => Driver)
  @JoinColumn()
  public driver: DriverGroup;

  @OneToOne(() => Driver)
  @JoinColumn()
  public group: DriverGroup;

  @Column({ type: 'int', default: 0 })
  public amount: number;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;

  // tasks: Order[];
}
