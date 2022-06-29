import { OneToOne, JoinColumn, Column } from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { Driver } from './driver.entity';
import { DriverGroup } from './driver.group.entity';
import { Rating } from '@/module/rating/entity/rating.entity';
import { User } from '@/module/user/entity/user.entity';

export class DriverRating extends TagEntity {
  @OneToOne(() => Driver)
  @JoinColumn()
  public driver: DriverGroup;

  @OneToOne(() => Driver)
  @JoinColumn()
  public group: DriverGroup;

  @Column({ type: 'timestamptz', nullable: true })
  public approvedAt!: Date;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @OneToOne(() => Rating)
  @JoinColumn()
  public rating: Rating;
}
