import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { HttpMethod } from '@/common/entity/enum.base';
import { SystemFeature } from './system.feature.entity';
import { TenantIntegrationConfig } from './tenant.integration-config.entity';

export enum IntegrationType {
  PUSH = 'push',
  PULL = 'pull',
  SUBSCRIBE_PUSH = 'subscribe_push',
  SUBSCRIBE_PULL = 'subscribe_pull',
}

export enum IntegrationAuthType {
  BASIC = 'basic',
  JWT = 'jwt',
  NONE = 'none',
}

@Entity({ name: 'tenant_integrations' })
export class TenantIntegration extends SoftDeleteEntity {
  @Column({ default: false })
  public enabled: boolean;

  @Column({ default: false })
  public cache: boolean;

  @OneToOne(() => SystemFeature)
  @JoinColumn()
  public feature: SystemFeature;

  @OneToOne(() => TenantIntegrationConfig, { nullable: true })
  @JoinColumn()
  public config!: TenantIntegrationConfig;

  @Column({
    type: 'enum',
    enum: IntegrationType,
    default: IntegrationType.PUSH,
  })
  public type: IntegrationType;

  @Column({ type: 'varchar', length: 2048, nullable: false })
  public pushUrl!: string;

  @Column({ type: 'varchar', length: 2048, nullable: false })
  public pushPull!: string;

  @Column({
    type: 'enum',
    enum: HttpMethod,
    array: true,
    default: [HttpMethod.GET],
    nullable: false,
  })
  public methods: HttpMethod[];

  @Column({ default: false })
  public postRaw: boolean;

  @Column({
    type: 'enum',
    enum: IntegrationAuthType,
    default: IntegrationAuthType.NONE,
  })
  public authType: IntegrationAuthType;

  @Column({ type: 'varchar', length: 128, nullable: false })
  public token!: string;

  @Column({ type: 'varchar', length: 128, nullable: false })
  public username!: string;

  @Column({ type: 'varchar', length: 128, nullable: false })
  public passwordHashed!: string;

  @Column({ type: 'varchar', length: 128, nullable: false })
  public passwordSalt!: string;

  @Column({ type: 'timestamptz', nullable: true })
  public lastSync!: Date;
}
