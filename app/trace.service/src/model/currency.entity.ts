import { Column, Entity } from 'typeorm';
import { CoreTimeEntity } from './base.core-timed.entity';

@Entity({ name: 'currencies' })
export class Currency extends CoreTimeEntity {
  @Column({ nullable: false, unique: true, type: 'varchar', length: 3 })
  public code: string;

  @Column({ nullable: false, type: 'varchar', length: 128 })
  public name: string;

  @Column({ nullable: false, type: 'varchar', length: 10 })
  public symbol: string;

  @Column({ nullable: false, unique: true, type: 'varchar', length: 32 })
  public country: string;

  @Column({ nullable: false, type: 'int' })
  public rate: number;
}
