import { OneToOne, JoinColumn, Column, Entity } from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { Driver } from './driver.entity';
import { DriverGroup } from './driver.group.entity';
import { Rating } from '@/module/rating/entity/rating.entity';
import { User } from '@/module/user/entity/user.entity';

@Entity({ name: 'driver_ratings' })
export class DriverRating extends SoftDeleteEntity {
  @OneToOne(() => Driver)
  @JoinColumn()
  public driver: DriverGroup;

  @Column({ nullable: true })
  public driverId!: string;

  @OneToOne(() => Driver)
  @JoinColumn()
  public group: DriverGroup;

  @Column({ nullable: true })
  public groupId!: string;

  @Column({ type: 'timestamptz', nullable: true })
  public approvedAt!: Date;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @Column({ nullable: true })
  public approvedById!: string;

  @OneToOne(() => Rating)
  @JoinColumn()
  public rating: Rating;

  @Column({ nullable: true })
  public ratingId!: string;
}
