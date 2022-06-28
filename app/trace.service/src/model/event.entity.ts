import { User } from './user.entity';
import { TenantEntity } from './base.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { SystemFeature } from './system.module.entity';
import { Customer } from './customer.entity';

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
