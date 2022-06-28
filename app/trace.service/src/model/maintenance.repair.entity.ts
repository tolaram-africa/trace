import { BaseTypeEntity } from './base.type.entity';
import { Maintenance } from './maintenance.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { MaintenanceRepairType } from './maintenance.repair-types.entity';

@Entity({ name: 'maintenance_repairs' })
export class MaintenanceRepair extends BaseTypeEntity {
  @OneToOne(() => MaintenanceRepairType)
  @JoinColumn()
  public type: MaintenanceRepairType;

  @Column({ default: false })
  public usedParts: boolean;

  @ManyToOne(() => Maintenance, (repair) => repair.repairs, { nullable: true })
  @JoinColumn()
  public maintenance!: Maintenance;

  @Column({ type: 'int', default: 0 })
  public estimatedCost!: number;

  @Column({ type: 'timestamptz', nullable: true })
  public completed!: Date;

  @Column({ type: 'text', nullable: true })
  public notes!: string;
}
