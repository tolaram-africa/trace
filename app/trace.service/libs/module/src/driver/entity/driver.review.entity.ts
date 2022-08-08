import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { User } from '@/module/user/entity/user.entity';
import { Driver } from './driver.entity';
import { File } from '@/module/file/entity/file.entity';
import { DriverReviewComment } from './driver.review.comment.entity';
import { DriverReviewType } from './driver.review.type.entity';

@Entity({ name: 'driver_reviews' })
export class DriverReview extends TagEntity {
  @OneToOne(() => Driver)
  @JoinColumn()
  public driver: Driver;

  @Column({ nullable: true })
  public driverId!: string;

  @OneToOne(() => User)
  @JoinColumn()
  public reviewBy!: User;

  @Column({ nullable: true })
  public reviewById!: string;

  @Column({ type: 'timestamptz', nullable: true })
  public approvedAt!: Date;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @Column({ nullable: true })
  public approvedById!: string;

  @Column({ type: 'timestamptz', nullable: true })
  public startedAt!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public endedAt: Date;

  @Column()
  public passed: boolean;

  @OneToOne(() => DriverReviewType)
  @JoinColumn()
  public type: DriverReviewType;

  @Column({ type: 'int', default: 1 })
  public pointScored: number;

  @ManyToMany(() => DriverReviewComment)
  @JoinTable({ name: 'drv_rvw_link_comments' })
  public comments!: DriverReviewComment[];

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'driver_review_files' })
  public files!: File[];

  @Column({ type: 'text', nullable: true })
  public remarks!: string;
}
