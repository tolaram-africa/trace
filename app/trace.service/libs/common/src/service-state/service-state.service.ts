import { Injectable } from '@nestjs/common';
import { CreateServiceStateInput } from './dto/create-service-state.input';
import { UpdateServiceStateInput } from './dto/update-service-state.input';

@Injectable()
export class ServiceStateService {
  create(createServiceStateInput: CreateServiceStateInput) {
    return 'This action adds a new serviceState';
  }

  findAll() {
    return `This action returns all serviceState`;
  }

  findOne(id: number) {
    return `This action returns a #${id} serviceState`;
  }

  update(id: number, updateServiceStateInput: UpdateServiceStateInput) {
    return `This action updates a #${id} serviceState`;
  }

  remove(id: number) {
    return `This action removes a #${id} serviceState`;
  }
}
