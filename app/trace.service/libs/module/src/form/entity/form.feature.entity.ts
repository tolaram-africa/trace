import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { Form } from './form.entity';
import { SystemFeature } from '@/module/system/entity';

@Entity({ name: 'feature_forms' })
export class FormFeature extends TagEntity {
  @Column({ default: false })
  public default: boolean;

  @Column({ default: false })
  public desabled: boolean;

  @OneToOne(() => SystemFeature)
  public feature: SystemFeature;

  @Column({ nullable: true })
  public featureId!: string;

  @OneToOne(() => Form)
  @JoinColumn()
  public form: Form;

  @Column({ nullable: true })
  public formId!: string;
}
