import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Region } from './entity/region.entity';

@Injectable()
export class RegionsService {
  constructor(
    @InjectRepository(Region)
    private regionsRepository: Repository<Region>,
  ) {}

  findAll(): Promise<Region[]> {
    return this.regionsRepository.find();
  }

  findOne(id: number): Promise<Region> {
    return this.regionsRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.regionsRepository.delete(id);
  }
}
