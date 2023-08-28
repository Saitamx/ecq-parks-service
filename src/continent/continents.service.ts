import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Continent } from './entity/continent.entity';

@Injectable()
export class ContinentsService {
  constructor(
    @InjectRepository(Continent)
    private continentsRepository: Repository<Continent>,
  ) {}

  findAll(): Promise<Continent[]> {
    return this.continentsRepository.find();
  }

  async remove(id: number): Promise<void> {
    await this.continentsRepository.delete(id);
  }
}
