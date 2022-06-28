import { Entity, Column } from 'typeorm';
import { BaseTimedEntity } from './base.timed.entity';

@Entity({ name: 'drv_review_comments' })
export class DriverReviewComment extends BaseTimedEntity {
  @Column({ type: 'text', nullable: true })
  public comment: string;
}
