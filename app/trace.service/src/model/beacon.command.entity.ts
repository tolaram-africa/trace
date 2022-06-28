import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { TenantEntity } from './base.tenant.entity';
import { BeaconMessage } from './beacon.message.entity';
import { BeaconDeviceModel } from './beacon.model.entity';

@Entity({ name: 'beacon_commands' })
export class BeaconCommand extends TenantEntity {
  @Column({ type: 'varchar', length: 128, nullable: false })
  public name: string;

  @Column({ type: 'int', default: 0 })
  public delay!: number;

  @Column({ default: false })
  public async!: boolean;

  @OneToOne(() => BeaconDeviceModel)
  @JoinColumn()
  public model: BeaconDeviceModel;

  @ManyToMany(() => BeaconMessage)
  @JoinTable({ name: 'beacon_command_msg' })
  messages: BeaconMessage[];

  @Column({ type: 'text', nullable: true })
  public description!: string;
}
