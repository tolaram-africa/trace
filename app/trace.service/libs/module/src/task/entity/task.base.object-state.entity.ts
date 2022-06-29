import { Column } from 'typeorm';
import { TenantEntity } from '@/common/entity/base.tenant.entity';
import { TaskObjectStatus } from '@/common/entity/enum.task';

export abstract class TaskObjectState extends TenantEntity {
  @Column({
    type: 'timestamptz',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  public assignedAt: Date;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  public completedAt!: Date;

  @Column({
    type: 'enum',
    enum: TaskObjectStatus,
    default: TaskObjectStatus.PENDING,
  })
  public endStatus: TaskObjectStatus;
}
