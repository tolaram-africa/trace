import { TypeEntity } from '@/common/entity/base.type.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'trailer_types' })
export class TrailerType extends TypeEntity {
  @Column({ type: 'int', default: 0 })
  public capacity: number;
}
