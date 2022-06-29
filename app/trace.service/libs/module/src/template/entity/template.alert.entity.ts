import { Entity } from 'typeorm';
import { MessageTemplate } from '@/module/template/entity/template.base.entity';

@Entity({ name: 'alert_templates' })
export class AlertTemplate extends MessageTemplate {}
