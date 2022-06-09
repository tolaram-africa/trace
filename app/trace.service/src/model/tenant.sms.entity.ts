import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { HttpMethod } from './enum.base';

@Entity({ name: 'tenant_sms_configs' })
export class TenantSmsConfig extends BaseEntity {
  @Column({ type: 'varchar', length: 155, nullable: false })
  public username: string;

  @Column({ type: 'varchar', length: 512, nullable: false })
  public password: string;

  @Column({ type: 'varchar', length: 155, nullable: false })
  public senderId: string;

  @Column({
    type: 'enum',
    enum: HttpMethod,
    default: HttpMethod.GET,
    nullable: false,
  })
  public method: HttpMethod;

  @Column({ type: 'varchar', length: 512, nullable: false })
  public key: string;

  @Column({ type: 'varchar', length: 512, nullable: false })
  public secret: string;

  @Column({ type: 'varchar', length: 1024, nullable: false })
  public urlTemplate: string;

  @Column({ type: 'varchar', length: 5, nullable: false })
  public version: string;
}
