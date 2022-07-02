import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity/base.soft-delete.entity';
import { HttpMethod } from '@/common/entity/enum.base';
import { SystemFeature } from '@/module/system/entity/system.feature.entity';
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

  @OneToOne(() => SystemFeature, { nullable: true })
  @JoinColumn()
  public feature!: SystemFeature;

  @Column({ nullable: true })
  public featureId!: string;

  @OneToOne(() => TenantIntegrationConfig, { nullable: true })
  @JoinColumn()
  public config!: TenantIntegrationConfig;

  @Column({ nullable: true })
  public configId!: string;

  @Column({
    type: 'enum',
    enum: IntegrationType,
    default: IntegrationType.PUSH,
  })
  public type: IntegrationType;

  @Column({ type: 'varchar', length: 2048, nullable: true })
  public pushUrl!: string;

  @Column({ type: 'varchar', length: 2048, nullable: true })
  public pushPull!: string;

  @Column({
    type: 'enum',
    enum: HttpMethod,
    array: true,
    default: [HttpMethod.GET],
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

  @Column({ type: 'varchar', length: 128, nullable: true })
  public token!: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public username!: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public passwordHashed!: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public passwordSalt!: string;

  @Column({ type: 'timestamptz', nullable: true })
  public lastSync!: Date;
}
