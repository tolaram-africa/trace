import { Entity, Column } from 'typeorm';
import { TypeEntity } from './base.type.entity';

@Entity('insurance_categories')
export class InsuranceCategory extends TypeEntity {
  @Column({ type: 'float', default: 1.5, nullable: true })
  public percentage!: number;
}
