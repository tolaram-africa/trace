import { OneToOne, JoinColumn, Column } from 'typeorm';
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

  @Column({ type: 'timestamptz', nullable: true })
  public approvedAt!: Date;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @OneToOne(() => Rating)
  @JoinColumn()
  public rating: Rating;
}
