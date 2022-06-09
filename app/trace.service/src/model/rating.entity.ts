import { Max } from 'class-validator';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { BaseTypeEntity } from './base.type.entity';
import { RatingComment } from './rating.coment.entity';
import { User } from './user.entity';

@Entity({ name: 'rating_types' })
export class RatingType extends BaseTypeEntity {
  @Column({ type: 'int', default: 0 })
  @Max(10)
  public point: number;
}

@Entity({ name: 'ratings' })
export class Rating extends BaseTaggedEntity {
  @OneToOne(() => User)
  @JoinColumn()
  public user: User;

  @OneToOne(() => RatingType)
  @JoinColumn()
  public type: RatingType;

  @Column({ type: 'int', default: 0 })
  @Max(10)
  public point: number;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;

  @Column({
    type: 'timestamptz',
    nullable: false,
  })
  public approvedTime: Date;

  @OneToMany(() => RatingComment, (comment) => comment.rating)
  @JoinColumn()
  public comments: RatingComment[];
}
