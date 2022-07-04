import { FormField } from './form.field.entity';
import { Form } from './form.entity';
import { SoftDeleteEntity } from '@/common/entity';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity({ name: 'form_field_values' })
export class FormFieldValue extends SoftDeleteEntity {
  @Column({ default: false })
  public default: boolean;

  @OneToOne(() => Form)
  public form: Form;

  @Column({ nullable: true })
  public formId!: string;

  @OneToOne(() => FormField)
  public field: FormField;

  @Column({ nullable: true })
  public fieldId!: string;

  @Column('jsonb', { nullable: false, default: {} })
  public value: string;
}
