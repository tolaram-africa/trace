import { Entity } from 'typeorm';
import { TypeEntity } from './base.type.entity';

@Entity({ name: 'asset_types' })
export class AssetType extends TypeEntity {}
