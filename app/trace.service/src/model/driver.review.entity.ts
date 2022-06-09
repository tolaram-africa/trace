import { BaseTimedEntity } from './base.timed.entity';
import { BaseTaggedEntity } from './base.tagged.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { User } from './user.entity';
import { Driver } from './driver.entity';
import { Document } from './document.entity';
import { BaseTypeEntity } from './base.type.entity';

@Entity({ name: 'drv_review_types' })
export class DriverReviewType extends BaseTypeEntity {
  @Column({ type: 'varchar', nullable: true, default: '#ff00ef' })
  public color!: string;

  @Column({ type: 'int', default: 0 })
  public point: number;
}

@Entity({ name: 'drv_review_comments' })
export class DriverReviewComment extends BaseTimedEntity {
  @Column({ type: 'text', nullable: true })
  public comment: string;
}

@Entity({ name: 'driver_reviews' })
export class DriverReview extends BaseTaggedEntity {
  @OneToOne(() => Driver)
  @JoinColumn()
  public driver: Driver;

  @OneToOne(() => User)
  @JoinColumn()
  public reviewBy!: User;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy!: User;

  @Column({ type: 'timestamptz', nullable: true })
  public started: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public ended: Date;

  @Column()
  public passed: boolean;

  @OneToOne(() => DriverReviewType)
  @JoinColumn()
  public type: DriverReviewType;

  @Column({ type: 'int', default: 1 })
  public rating: number;

  @ManyToMany(() => DriverReviewComment)
  @JoinTable({ name: 'drv_rvw_link_comments' })
  public comments!: DriverReviewComment[];

  @ManyToMany(() => Document)
  @JoinTable({ name: 'driver_review_docs' })
  public documents!: Document[];

  @Column({ type: 'text', nullable: true })
  public remarks!: string;
}
