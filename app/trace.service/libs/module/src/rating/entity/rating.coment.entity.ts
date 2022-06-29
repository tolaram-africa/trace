import { Max } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { Rating } from '@/module/rating/entity/rating.entity';
import { User } from '@/module/user/entity/user.entity';

@Entity({ name: 'rating_comments' })
export class RatingComment extends TagEntity {
  @OneToOne(() => User)
  @JoinColumn()
  public user: User;

  @ManyToOne(() => Rating, (rating) => rating.comments)
  @JoinColumn()
  public rating: Rating;

  @Column({ type: 'int', default: 0 })
  @Max(10)
  public point: number;

  @Column({ type: 'text', nullable: false })
  public comment: string;
}
