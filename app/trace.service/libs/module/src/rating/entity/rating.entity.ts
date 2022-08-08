import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { TagEntity } from '@/common/entity';
import { RatingComment } from './rating.comment.entity';
import { User } from '@/module/user/entity/user.entity';
import { RatingType } from './rating.type.entity';

@Entity({ name: 'ratings' })
export class Rating extends TagEntity {
  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public individual!: User;

  @OneToOne(() => RatingType)
  @JoinColumn()
  public type: RatingType;

  @Column({ type: 'int', default: 0 })
  public point: number;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public approvedBy!: User;

  @Column({
    type: 'timestamptz',
    nullable: false,
  })
  public approvedAt!: Date;

  @OneToMany(() => RatingComment, (comment) => comment.rating, {
    nullable: true,
  })
  @JoinColumn()
  public comments!: RatingComment[];
}
