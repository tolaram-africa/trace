import { Entity, Column } from 'typeorm';
import { TypeEntity } from '@/common/entity/base.type.entity';

@Entity({ name: 'network_providers' })
export class NetworkProvider extends TypeEntity {
  @Column({ type: 'varchar', length: 1024, nullable: false })
  public url: string;

  @Column({ default: false })
  public enabled: boolean;
}
