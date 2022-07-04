import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { TenantEntity } from '@/common/entity/base.tenant.entity';
import { FieldType } from './form.field.types';
import { Form } from './form.entity';

@Entity({ name: 'form_fields' })
export class FormField extends TenantEntity {
  @ManyToOne(() => Form, (item) => item.fields)
  @JoinColumn()
  public form: Form;

  @Column({ nullable: true })
  public formId!: string;

  @Column({ default: false })
  public default: boolean;

  @Column({
    type: 'enum',
    enum: FieldType,
    default: FieldType.TEXT,
    nullable: false,
  })
  public type: FieldType;

  @Column({ type: 'int', default: 0 })
  public position: number;

  @Column({ type: 'varchar', length: 128, nullable: true })
  public name!: string;

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
