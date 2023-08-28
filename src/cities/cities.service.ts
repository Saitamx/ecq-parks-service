import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './entity/city.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private citiesRepository: Repository<City>,
  ) {}

  findAll(): Promise<City[]> {
    return this.citiesRepository.find();
  }

  async remove(id: number): Promise<void> {
    await this.citiesRepository.delete(id);
  }
}
