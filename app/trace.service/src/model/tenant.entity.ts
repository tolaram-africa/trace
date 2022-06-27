import { TenantDomain } from './tenant.domain.entity';
import {
  Column,
  Entity,
  OneToMany,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { CoreTimeEntity } from './base.core-timed.entity';

@Entity({ name: 'tenants' })
export class Tenant extends CoreTimeEntity {
  @Column({ type: 'varchar', length: 128, nullable: true })
  public createdBy!: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public updatedBy!: string;

  @Column()
  public name: string;

  @Column()
  public shortName: string;

  @Column({ unique: true })
  public uniqueId: string;

  @Column({ type: 'boolean', default: false })
  public isArchived: boolean;

  @Column({ default: false })
  public active: boolean;

  @Column({ type: 'varchar', length: 512, nullable: false })
  public token: string;

  @Column({ type: 'varchar', length: 512, nullable: false })
  public language: string;

  @Column({ type: 'varchar', length: 1024, nullable: false })
  public logo: string;

  @Column({ type: 'varchar', length: 1024, nullable: false })
  public background: string;

  @OneToMany(() => TenantDomain, (domain) => domain.tenant)
  public domains: TenantDomain[];
}
