import { Entity, Column } from 'typeorm';
import { TypeEntity } from '@/common/entity/base.type.entity';

@Entity({ name: 'maintenance_repair_types' })
export class MaintenanceRepairType extends TypeEntity {
  @Column({ default: false })
  public quick: boolean;
}
