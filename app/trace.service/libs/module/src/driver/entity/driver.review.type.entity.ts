import { Entity, Column } from 'typeorm';
import { TypeEntity } from '@/common/entity';

@Entity({ name: 'driver_review_types' })
export class DriverReviewType extends TypeEntity {
  @Column({ type: 'varchar', nullable: true, default: '#ff00ef' })
  public color!: string;

  @Column({ type: 'int', default: 0 })
  public maxPoint: number;
}
