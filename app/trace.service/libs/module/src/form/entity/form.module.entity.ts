import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { Form } from './form.entity';

@Entity({ name: 'form_modules' })
export class FormModule extends TagEntity {
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
