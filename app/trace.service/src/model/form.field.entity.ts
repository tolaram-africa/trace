import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { FieldType } from './form.field.types';

@Entity({ name: 'form_fields' })
export class FormField extends BaseEntity {
  @Column({ default: false })
  public default: boolean;

  @Column({
    type: 'enum',
    enum: FieldType,
    default: FieldType.TEXT,
    nullable: false,
  })
  public type: FieldType;

  @Column({ type: 'int' })
  public position: number;

  @Column({ type: 'varchar', length: 128, nullable: false })
  public label: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public placeholder: string;

  @Column({ type: 'varchar', length: 512, nullable: false })
  public description!: string;

  @Column({ default: false })
  public required: boolean;

  @Column({ default: 0 })
  public min!: number;

  @Column({ default: 2048 })
  public max!: number;

  @Column({ type: 'jsonb', default: {} })
  public defaultValue!: string;

  @Column('jsonb', { nullable: false, default: {} })
  public options: string;
}
