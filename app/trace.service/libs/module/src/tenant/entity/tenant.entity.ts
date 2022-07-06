import { TenantDomain } from './tenant.domain.entity';
import {
  AfterInsert,
  Column,
  Entity,
  Generated,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
  RelationId,
} from 'typeorm';
import { CoreDeleteEntity } from '@/common/entity/base.core.soft-delete.entity';
import { TenantSetting } from './tenant.setting.entity';
import { TenantNavigation } from './tenant.navigation.entity';

@Entity({ name: 'tenants' })
export class Tenant extends CoreDeleteEntity {
  @Column({ type: 'uuid', nullable: true })
  public createdBy!: string;

  @Column({ type: 'uuid', nullable: true })
  public modifiedBy!: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public name: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public shortName: string;

  @Column({ unique: true })
  @Generated()
  public uniqueId: number;

  @Column({ default: false })
  public active: boolean;

  @Column({ type: 'varchar', length: 1024, nullable: true })
  public logo: string;

  @Column({ type: 'varchar', length: 1024, nullable: true })
  public background: string;

  @Index('idx_tenant_settingid')
  @OneToOne(() => TenantSetting, (setting) => setting.tenant, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn()
  public setting!: TenantSetting;

  @RelationId((tenant: Tenant) => tenant.setting)
  @Column({ type: 'uuid', nullable: true })
  public settingId!: string;

  @Index('idx_tenant_navid')
  @OneToOne(() => TenantNavigation, (navigation) => navigation.tenant, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn()
  public navigation!: TenantNavigation;

  @RelationId((item: Tenant) => item.navigation)
  @Column({ type: 'uuid', nullable: true })
  public navigationId!: string;

  @OneToMany(() => TenantDomain, (domain) => domain.tenant, {
    nullable: true,
    cascade: true,
  })
  @JoinColumn()
  public domains!: TenantDomain[];
}
