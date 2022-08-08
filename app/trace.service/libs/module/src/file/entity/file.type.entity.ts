import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { TypeEntity } from '@/common/entity/base.type.entity';
import { SystemFeature } from '@/module/system/entity/system.feature.entity';

@Entity({ name: 'doc_type' })
export class FileType extends TypeEntity {
  @Column()
  public icon: string;

  @OneToOne(() => SystemFeature, { nullable: true })
  @JoinColumn()
  public feature!: SystemFeature;

  @Column({ nullable: true })
  public featureId!: number;
}
