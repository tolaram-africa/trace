import { TypeEntity } from '@/common/entity/base.type.entity';
import { Maintenance } from './maintenance.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { MaintenanceRepairType } from './maintenance.repair-types.entity';

@Entity({ name: 'maintenance_repairs' })
export class MaintenanceRepair extends TypeEntity {
  @OneToOne(() => MaintenanceRepairType)
  @JoinColumn()
  public type: MaintenanceRepairType;

  @Column({ nullable: true })
  public typeId!: string;

  @Column({ default: false })
  public usedParts: boolean;

  @ManyToOne(() => Maintenance, (repair) => repair.repairs, { nullable: true })
  @JoinColumn()
  public maintenance!: Maintenance;

  @Column({ nullable: true })
  public maintenanceId!: string;

  @Column({ type: 'int', default: 0 })
  public estimatedCost!: number;

  @Column({ type: 'timestamptz', nullable: true })
  public completed!: Date;

  @Column({ type: 'text', nullable: true })
  public notes!: string;
}
