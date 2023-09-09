import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateParkDto } from './dto/create-park.dto';
import { EntityNotFoundError, Repository } from 'typeorm';
import { ParkEntity } from './entity/park.entity';
import { Park } from './interfaces/park.interface';
import { UpdateParkDto } from './dto/update-park.dto';
import { ParkListDto } from './dto/park-list.dto';
import { FilterParksDto } from './dto/filter-park.dto';

@Injectable()
export class ParksService {
  constructor(
    @InjectRepository(ParkEntity)
    private readonly parkRepository: Repository<ParkEntity>,
  ) {}

  async getParks(filterDto: FilterParksDto): Promise<ParkEntity[]> {
    const { commune } = filterDto;
    let query = this.parkRepository.createQueryBuilder('park');

    if (commune) {
      query = query.where('park.commune = :commune', { commune });
    }

    return await query.getMany();
  }

  async getParksList(filterDto: FilterParksDto): Promise<ParkListDto[]> {
    const { commune } = filterDto;
    let query = this.parkRepository
      .createQueryBuilder('park')
      .select([
        'park.id',
        'park.name',
        'park.ranking',
        'park.description',
        'park.images',
      ]);

    if (commune) {
      query = query.where('park.commune = :commune', { commune });
    }

    return await query.getMany();
  }

  async getParkById(id: number): Promise<Park> {
    try {
      return await this.parkRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      if (error instanceof EntityNotFoundError) {
        throw new NotFoundException(`Park with ID ${id} not found`);
      }
      throw error;
    }
  }

  async create(park: CreateParkDto): Promise<ParkEntity> {
    const newPark = this.parkRepository.create(park);
    return this.parkRepository.save(newPark);
  }

  async update(id: number, updateParkDto: UpdateParkDto): Promise<ParkEntity> {
    const park = await this.parkRepository.preload({
      id,
      ...updateParkDto,
    });

    if (!park) {
      throw new NotFoundException(`Park with ID ${id} not found`);
    }

    return this.parkRepository.save(park);
  }

  async delete(id: number): Promise<void> {
    const result = await this.parkRepository.delete({ id });

    if (result.affected === 0) {
      throw new NotFoundException(`Park with ID ${id} not found`);
    }
  }
}
