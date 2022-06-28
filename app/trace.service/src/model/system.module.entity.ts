import { Column, Entity, PrimaryColumn } from 'typeorm';
import { CoreEntity } from './base.core.entity';

@Entity({ name: 'system_modules' })
export class SystemFeature extends CoreEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 128,
    nullable: false,
    unique: true,
  })
  public name: string;

  @Column({ type: 'varchar', length: 256 })
  public fullName: string;

  @Column({ type: 'varchar', length: 512, nullable: true })
  public description!: string;
}
