import { BaseTimedEntity } from './base.timed.entity';
import { Schedule } from './schedule.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { HttpMethod } from './enum.base';

@Entity({ name: 'tenant_webhooks' })
export class TenantWebhook extends BaseTimedEntity {
  // TODO: Update later to use enum
  @Column()
  public module: string;

  // TODO: Update later to use enum
  @Column()
  public events: string;

  @Column({ type: 'varchar', length: 512, nullable: false })
  public urlTemplate: string;

  @Column({
    type: 'enum',
    enum: HttpMethod,
    array: true,
    default: [HttpMethod.GET],
    nullable: false,
  })
  public methods: HttpMethod;

  @Column({ type: 'varchar', length: 512, nullable: false })
  public secret: string;

  @Column({ default: false })
  public enabled: boolean;

  @Column({ type: 'int', default: 30 })
  public delay: number;

  @Column({ default: false })
  public retry: boolean;

  @Column({ type: 'int', default: 30 })
  public retryDelay: number;

  @Column({ type: 'int', default: 30 })
  public retryTimeout: number;

  @Column({ type: 'int', default: 3 })
  public retryMax: number;

  @ManyToMany(() => Schedule)
  @JoinTable()
  public schedules: Schedule[];
}
