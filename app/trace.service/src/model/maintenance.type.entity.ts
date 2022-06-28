import { Entity } from 'typeorm';
import { TypeEntity } from './base.type.entity';

@Entity({ name: 'maintenance_types' })
export class MaintenanceType extends TypeEntity {}
