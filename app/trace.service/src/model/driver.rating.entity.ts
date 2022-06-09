import { OneToOne, JoinColumn } from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { Driver } from './driver.entity';
import { DriverGroup } from './driver.group.entity';
import { Rating } from './rating.entity';
import { User } from './user.entity';

export class DriverRating extends BaseTaggedEntity {
  @OneToOne(() => Driver)
  @JoinColumn()
  public driver: DriverGroup;

  @OneToOne(() => Driver)
  @JoinColumn()
  public group: DriverGroup;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;

  @OneToOne(() => Rating)
  @JoinColumn()
  public rating: Rating;
}
