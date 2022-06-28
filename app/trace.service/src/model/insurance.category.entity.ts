import { Entity, Column } from 'typeorm';
import { BaseTypeEntity } from './base.type.entity';

@Entity('insurance_categories')
export class InsuranceCategory extends BaseTypeEntity {
  @Column({ type: 'float', default: 1.5, nullable: true })
  public percentage!: number;
}
