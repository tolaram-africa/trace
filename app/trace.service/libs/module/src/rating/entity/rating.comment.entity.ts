import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Rating } from '@/module/rating/entity/rating.entity';
import { User } from '@/module/user/entity/user.entity';
import { TenantEntity } from '@/common/entity';

@Entity({ name: 'rating_comments' })
export class RatingComment extends TenantEntity {
  @OneToOne(() => User)
  @JoinColumn()
  public user: User;

  @ManyToOne(() => Rating, (rating) => rating.comments)
  @JoinColumn()
  public rating: Rating;

  @Column({ type: 'int', default: 0 })
  public point: number;

  @Column({ type: 'text', nullable: false })
  public message: string;
}
