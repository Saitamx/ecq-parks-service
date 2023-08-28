import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Province } from './entity/province.entity';

@Injectable()
export class ProvincesService {
  constructor(
    @InjectRepository(Province)
    private provincesRepository: Repository<Province>,
  ) {}

  findAll(): Promise<Province[]> {
    return this.provincesRepository.find();
  }

  async remove(id: number): Promise<void> {
    await this.provincesRepository.delete(id);
  }
}
