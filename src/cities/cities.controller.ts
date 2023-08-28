import { Controller, Get, Param, Delete } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { City } from './entity/city.entity';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  findAll(): Promise<City[]> {
    return this.citiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<City> {
    return this.citiesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.citiesService.remove(+id);
  }
}
