import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class CoreEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'boolean', default: false })
  public isArchived: boolean;
}
