import { Controller, Get, Param, Delete } from '@nestjs/common';
import { MunicipalitiesService } from './municipalities.service';
import { Municipality } from './entity/municipality.entity';

@Controller('municipalities')
export class MunicipalitiesController {
  constructor(private readonly municipalitiesService: MunicipalitiesService) {}

  @Get()
  findAll(): Promise<Municipality[]> {
    return this.municipalitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Municipality> {
    return this.municipalitiesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.municipalitiesService.remove(+id);
  }
}
