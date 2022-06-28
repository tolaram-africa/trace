import { Entity, Column } from 'typeorm';
import { BaseTypeEntity } from './base.type.entity';

@Entity({ name: 'driver_review_types' })
export class DriverReviewType extends BaseTypeEntity {
  @Column({ type: 'varchar', nullable: true, default: '#ff00ef' })
  public color!: string;

  @Column({ type: 'int', default: 0 })
  public maxPoint: number;
}
