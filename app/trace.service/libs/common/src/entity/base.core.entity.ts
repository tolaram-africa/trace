import {
  BaseEntity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class CoreEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'boolean', default: false })
  public archived!: boolean;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  public createdAt!: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
  })
  public updatedAt!: Date;
}
