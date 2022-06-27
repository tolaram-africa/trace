import { Entity, Column } from 'typeorm';
import { CoreEntity } from './base.core.entity';

@Entity({ name: 'network_providers' })
export class NetworkProvider extends CoreEntity {
  @Column({ type: 'varchar', length: 128, nullable: false })
  public name: string;

  @Column({ type: 'text', nullable: true })
  public description!: string;

  @Column({ type: 'varchar', length: 1024, nullable: false })
  public url: string;

  @Column({ default: false })
  public enabled: boolean;
}
