import { Entity, Column } from 'typeorm';
import { BaseTypeEntity } from './base.type.entity';

@Entity({ name: 'maintenance_repair_types' })
export class MaintenanceRepairType extends BaseTypeEntity {
  @Column({ default: false })
  public quick: boolean;
}
