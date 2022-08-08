import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { TypeEntity } from '@/common/entity/base.type.entity';
import { MaintenanceRequestLog } from './maintenance.request-log.entity';

@Entity({ name: 'maintenance_req_log_issues' })
export class MaintenanceRequestIssue extends TypeEntity {
  @ManyToOne(() => MaintenanceRequestLog, (log) => log.issues)
  @JoinColumn()
  public requestLog: MaintenanceRequestLog;

  @Column({ nullable: true })
  public requestLogId!: string;

  @Column({ default: false })
  public minor: boolean;

  @Column({ type: 'timestamptz' })
  public firstOccured: Date;

  @Column({ type: 'timestamptz' })
  public lastOccured: Date;

  @Column({ type: 'timestamptz' })
  public previouslyRepaired: Date;
}
