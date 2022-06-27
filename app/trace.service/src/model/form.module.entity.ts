import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseTaggedEntity } from './base.tagged.entity';
import { Form } from './form.entity';

@Entity({ name: 'form_modules' })
export class FormModule extends BaseTaggedEntity {
  @Column({ default: false })
  public default: boolean;

  @Column({ default: false })
  public desabled: boolean;

  @Column()
  public module: string;

  @OneToOne(() => Form)
  @JoinColumn()
  public form: Form;
}
