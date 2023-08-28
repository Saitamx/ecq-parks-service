import { Controller, Get, Param, Delete } from '@nestjs/common';
import { ProvincesService } from './provinces.service';
import { Province } from './entity/province.entity';

@Controller('provinces')
export class ProvincesController {
  constructor(private readonly provincesService: ProvincesService) {}

  @Get()
  findAll(): Promise<Province[]> {
    return this.provincesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Province> {
    return this.provincesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.provincesService.remove(+id);
  }
}
