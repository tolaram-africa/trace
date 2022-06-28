import { FormField } from './form.field.entity';
import { Form } from './form.entity';
import { SoftDeleteEntity } from './base.soft-delete.entity';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity({ name: 'form_field_values' })
export class FormFieldsValue extends SoftDeleteEntity {
  @Column({ default: false })
  public default: boolean;

  @OneToOne(() => Form)
  public form: Form;

  @OneToOne(() => FormField)
  public field: FormField;

  @Column('jsonb', { nullable: false, default: {} })
  public value: string;
}
