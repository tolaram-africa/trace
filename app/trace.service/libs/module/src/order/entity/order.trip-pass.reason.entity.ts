import { Column, Entity } from 'typeorm';
import { TypeEntity } from '@/common/entity/base.type.entity';

@Entity({ name: 'trip_pass_reasons' })
export class TripPassReason extends TypeEntity {
  @Column({ default: true })
  public hasValidity: boolean;

  @Column({ type: 'interval' })
  public validityPeriod: number;
}
