import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'system_modules' })
export class SystemFeature extends BaseEntity {
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
