import { Column, JoinColumn, OneToOne } from 'typeorm';
import { CoreEntity } from './base.core.entity';
import { Tenant } from './tenant.entity';

export abstract class BaseEntity extends CoreEntity {
  @Column({ type: 'varchar', length: 300, nullable: true })
  public createdId!: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  public updatedId!: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  public deletedId!: string;

  @OneToOne(() => Tenant)
  @JoinColumn()
  public tenant!: Tenant;
}
