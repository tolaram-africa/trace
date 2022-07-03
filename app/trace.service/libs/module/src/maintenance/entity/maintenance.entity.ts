import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { User } from '@/module/user/entity/user.entity';
import { Vehicle } from '@/module/asset/entity/asset.vehicle.entity';
import { MaintenanceRepair } from '@/module/maintenance/entity/maintenance.repair.entity';
import { MaintenanceRequestLog } from '@/module/maintenance/entity/maintenance.request-log.entity';
import { StockOutRequest } from '@/module/stock/entity/stock.out-request.entity';
import { File } from '@root/libs/module/src/file/entity/file.entity';

@Entity({ name: 'maintenances' })
export class Maintenance extends TagEntity {
  @OneToOne(() => Vehicle)
  @JoinColumn()
  public vehicle: Vehicle;

  @OneToOne(() => MaintenanceRequestLog)
  @JoinColumn()
  public repairLog: MaintenanceRequestLog;

  @OneToMany(() => MaintenanceRepair, (repair) => repair.maintenance)
  @JoinColumn()
  public repairs: MaintenanceRepair[];

  @OneToOne(() => StockOutRequest, { nullable: true })
  @JoinColumn()
  public partsUsed!: StockOutRequest;

  @Column({ type: 'bigint', nullable: false, default: 0 })
  public odometer: number;

  @Column({ type: 'int', nullable: false })
  public totalCost: number;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public assignedTo!: User;

  @Column({ type: 'timestamptz', nullable: true })
  public assignedAt!: Date;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public assignedBy!: User;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  public completedBy!: User;

  @Column({ type: 'timestamptz', nullable: true })
  public startedAt!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public completedAt: Date;

  @Column({ type: 'text', nullable: true })
  public notes: string;

  @ManyToMany(() => File, { nullable: true })
  @JoinTable({ name: 'maintenance_files' })
  public files!: File[];
}
