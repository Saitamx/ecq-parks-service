import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Municipality } from './entity/municipality.entity';

@Injectable()
export class MunicipalitiesService {
  constructor(
    @InjectRepository(Municipality)
    private municipalitiesRepository: Repository<Municipality>,
  ) {}

  findAll(): Promise<Municipality[]> {
    return this.municipalitiesRepository.find();
  }

  async remove(id: number): Promise<void> {
    await this.municipalitiesRepository.delete(id);
  }
}
