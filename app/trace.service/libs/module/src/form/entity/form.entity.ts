import { Column, Entity, Index, JoinColumn, OneToMany } from 'typeorm';
import { SoftDeleteEntity } from '@/common/entity';
import { FormField } from '@/module/form/entity/form.field.entity';

@Entity({ name: 'forms' })
export class Form extends SoftDeleteEntity {
  @Column({ default: false })
  public default: boolean;

  @Index('idx_form_name')
  @Column({ type: 'varchar', length: 128 })
  public name: string;

  @OneToMany(() => FormField, (item) => item.form, { nullable: true })
  @JoinColumn()
  public fields!: FormField[];

  @Column({ default: false })
  public enabled: boolean;

  @Column({ type: 'date', nullable: true })
  public expiry!: Date;

  @Column({ type: 'varchar', length: 512, nullable: true })
  public description!: string;
}
