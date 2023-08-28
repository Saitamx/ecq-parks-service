import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from './entity/country.entity';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country)
    private countriesRepository: Repository<Country>,
  ) {}

  findAll(): Promise<Country[]> {
    return this.countriesRepository.find();
  }

  async remove(id: number): Promise<void> {
    await this.countriesRepository.delete(id);
  }
}
