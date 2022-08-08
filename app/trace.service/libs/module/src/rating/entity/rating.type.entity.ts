import { Entity, Column } from 'typeorm';
import { TypeEntity } from '@/common/entity';

@Entity({ name: 'rating_types' })
export class RatingType extends TypeEntity {
  @Column({ type: 'int', default: 0 })
  public point: number;
}
