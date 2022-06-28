import { Column } from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';

export abstract class Template extends BaseTaggedEntity {
  @Column({ default: false })
  public default: boolean;

  @Column({ default: true })
  public enabled: boolean;

  @Column({ type: 'text', nullable: true })
  public description!: string;

  @Column({ type: 'text', nullable: true })
  public subject: string;

  @Column({ type: 'text', nullable: true })
  public body: string;

  @Column({ type: 'varchar', length: 1024, nullable: true })
  public url: string;
}
