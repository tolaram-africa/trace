import { Column } from 'typeorm';
import { CoreDeleteEntity } from '@/common/entity/base.core.soft-delete.entity';

export abstract class BaseSetting extends CoreDeleteEntity {
  @Column({ type: 'varchar', length: 512, nullable: true })
  public apiToken: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public language!: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public timezone!: string;

  @Column({ default: true })
  public Hour24Time!: boolean;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public unitDistance!: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public unitVolume!: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public unitWeight!: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public unitTemperature!: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public unitSpeed!: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public unitPower!: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public unitPressure!: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public unitForce!: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public unitArea!: string;
}
