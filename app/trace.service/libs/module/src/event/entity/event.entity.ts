import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { User } from '@/module/user/entity/user.entity';
import { TenantEntity } from '@/common/entity/base.tenant.entity';
import { SystemFeature } from '@/module/system/entity/system.feature.entity';
import { Customer } from '@/module/customer/entity/customer.entity';

@Entity({ name: 'events' })
export class Event extends TenantEntity {
  @Column({ type: 'varchar', length: 128, nullable: false })
  public type: string;

  @OneToOne(() => SystemFeature)
  @JoinColumn()
  public feature: SystemFeature;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  public created: Date;

  @ManyToMany(() => User, { nullable: true })
  @JoinTable({ name: 'events_users' })
  public users!: User[];

  @OneToOne(() => Customer, { nullable: true })
  @JoinColumn()
  public customer!: Customer;

  @Column({ type: 'jsonb', default: {}, nullable: true })
  public payload!: string;
}
