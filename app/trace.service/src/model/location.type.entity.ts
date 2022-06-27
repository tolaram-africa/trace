import { Column, Entity } from 'typeorm';
import { BaseTypeEntity } from './base.type.entity';

@Entity({ name: 'location_type' })
export class LocationType extends BaseTypeEntity {
  @Column({ type: 'varchar', length: 1024 })
  public icon: string;
}
