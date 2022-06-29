import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { TenantEntity } from '@/common/entity/base.tenant.entity';
import { NetworkProvider } from './network-card.provider.entity';

export enum NetworkServiceType {
  DATA = 'data',
  VOICE = 'voice',
  SMS = 'sms',
  CUG = 'cug',
  OTHER = 'other',
}

@Entity({ name: 'network_cards' })
export class NetworkCard extends TenantEntity {
  @OneToOne(() => NetworkProvider)
  @JoinColumn()
  public provider: NetworkProvider;

  @Column({ type: 'date', nullable: true })
  public dateOrdered!: Date;

  @Column({ type: 'date', nullable: true })
  public lastUpdated!: Date;

  @Column({
    type: 'enum',
    enum: NetworkServiceType,
    array: true,
    default: [NetworkServiceType.DATA],
  })
  public services: NetworkServiceType;

  @Column({ type: 'bigint', nullable: false })
  public phoneNumber: number;

  @Column({ type: 'varchar', nullable: true })
  public serial!: string;

  @Column({ type: 'text', nullable: true })
  public notes!: string;
}
