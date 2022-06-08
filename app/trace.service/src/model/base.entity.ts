import { PrimaryGeneratedColumn, Column } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'boolean', default: false })
  public isArchived: boolean;

  @Column({ type: 'varchar', length: 300, nullable: true })
  public createdId!: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  public updatedId!: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  public deletedId!: string;
}
