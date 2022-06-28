import { Column } from 'typeorm';
import { TagEntity } from './base.tagged.entity';

export abstract class MessageTemplate extends TagEntity {
  @Column({ default: false })
  public default: boolean;

  @Column({ default: true })
  public enabled: boolean;

  @Column({ type: 'text', nullable: true })
  public description!: string;

  @Column({ type: 'text', nullable: true })
  public subject: string;

  @Column({ type: 'text', nullable: true })
  public bodyFull: string;

  @Column({ type: 'text', nullable: true })
  public bodyShort: string;

  @Column({ type: 'varchar', length: 1024, nullable: true })
  public url: string;
}
