import { Entity } from 'typeorm';
import { TypeEntity } from '@/common/entity/base.type.entity';

@Entity({ name: 'asset_types' })
export class AssetType extends TypeEntity {}
