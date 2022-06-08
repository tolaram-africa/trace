import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'location_type' })
export class LocationType extends BaseEntity {
  @Column({ default: false })
  public default: boolean;

  @Column()
  public name: string;

  @Column({ type: 'varchar', length: 1024 })
  public icon: string;

  @Column({ type: 'text' })
  public description: string;
}
