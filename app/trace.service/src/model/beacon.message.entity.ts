import { Column, Entity } from 'typeorm';
import { TenantEntity } from './base.tenant.entity';

export enum BeaconMessageChannel {
  SMS = 'SMS',
  MQQT = 'MQTT',
  INTERNET = 'INTERNET',
}

@Entity({ name: 'beacon_messages' })
export class BeaconMessage extends TenantEntity {
  @Column({ default: false })
  public default: boolean;

  @Column({
    type: 'enum',
    enum: BeaconMessageChannel,
    default: [BeaconMessageChannel.INTERNET],
    array: true,
  })
  public channels: BeaconMessageChannel[];

  @Column({ type: 'varchar', nullable: false })
  public commandKey!: string;

  @Column({ type: 'int', nullable: false, default: 0 })
  public delay!: number;

  @Column({ type: 'varchar', length: 1024, nullable: false })
  public queueAddress!: string;

  @Column({ type: 'varchar', length: 1024, nullable: false })
  public message!: string;

  @Column({ type: 'jsonb', nullable: true })
  public attributes!: string;
}
