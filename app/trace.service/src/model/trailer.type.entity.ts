import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'trailer_type' })
export class TrailerType extends BaseEntity {
  @Column({ default: false })
  public default: boolean;

  @Column()
  public name: string;

  @Column()
  public capacity: number;

  @Column({ type: 'text', nullable: true })
  public description!: string;
}
