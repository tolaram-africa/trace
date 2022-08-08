import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'system_features' })
export class SystemFeature extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'varchar',
    length: 128,
    nullable: false,
    unique: true,
  })
  public identifier: string;

  @Column({ type: 'varchar', length: 256, nullable: false })
  public name: string;

  @Column({ default: false })
  depreciated!: boolean;

  @Column({ type: 'varchar', length: 512, nullable: true })
  public description!: string;
}
