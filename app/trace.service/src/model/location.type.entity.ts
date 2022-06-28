import { Column, Entity } from 'typeorm';
import { TypeEntity } from './base.type.entity';

@Entity({ name: 'location_type' })
export class LocationType extends TypeEntity {
  @Column({ type: 'varchar', length: 1024 })
  public icon: string;
}
