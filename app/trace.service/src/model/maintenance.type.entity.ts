import { Entity } from 'typeorm';
import { BaseTypeEntity } from './base.type.entity';

@Entity({ name: 'maintenance_types' })
export class MaintenanceType extends BaseTypeEntity {}
