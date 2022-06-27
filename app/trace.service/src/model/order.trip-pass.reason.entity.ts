import { Column, Entity } from 'typeorm';
import { BaseTypeEntity } from './base.type.entity';

@Entity({ name: 'trip_pass_reasons' })
export class TripPassReason extends BaseTypeEntity {
  @Column({ default: true })
  public hasValidity: boolean;

  @Column({ type: 'interval' })
  public validityPeriod: number;
}
