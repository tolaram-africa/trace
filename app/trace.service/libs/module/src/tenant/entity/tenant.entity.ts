import { TenantDomain } from './tenant.domain.entity';
import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { CoreDeleteEntity } from '@/common/entity/base.core.soft-delete.entity';
import { TenantSetting } from './tenant.setting.entity';

@Entity({ name: 'tenants' })
export class Tenant extends CoreDeleteEntity {
  @Column({ type: 'varchar', length: 128, nullable: true })
  public createdBy!: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public updatedBy!: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public name: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public shortName: string;

  @Column({ unique: true })
  @Generated()
  public uniqueId: number;

  @Column({ default: false })
  public active: boolean;

  @Column({ type: 'varchar', length: 512, nullable: true })
  public token: string;

  @Column({ type: 'varchar', length: 1024, nullable: true })
  public logo: string;

  @Column({ type: 'varchar', length: 1024, nullable: true })
  public background: string;

  @OneToOne(() => TenantSetting, (setting) => setting.tenant, {
    nullable: true,
  })
  @JoinColumn()
  public setting!: TenantSetting;

  @Column({ nullable: true })
  public settingId: string;

  @OneToMany(() => TenantDomain, (domain) => domain.tenant)
  @JoinColumn()
  public domains!: TenantDomain[];
}
