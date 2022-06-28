import { Entity } from 'typeorm';
import { Template } from './template.base.entity';

@Entity({ name: 'message_templates' })
export class MessageTemplate extends Template {}
