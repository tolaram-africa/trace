import { Entity } from 'typeorm';
import { BaseTypeEntity } from './base.type.entity';

@Entity({ name: 'asset_types' })
export class AssetType extends BaseTypeEntity {}
