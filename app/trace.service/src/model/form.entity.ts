import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseTimedEntity } from './base.timed.entity';
import { FormField } from './form.field.entity';

@Entity({ name: 'forms' })
export class Form extends BaseTimedEntity {
  @Column({ default: false })
  public default: boolean;

  @ManyToMany(() => FormField)
  @JoinTable({ name: 'form_linked_fields' })
  public fields: FormField[];

  @Column({ default: false })
  public enabled: boolean;

  @Column({ type: 'date' })
  public expiry: Date;

  @Column({ type: 'varchar', length: 512, nullable: true })
  public description!: string;
}
