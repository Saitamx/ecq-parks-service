import { Controller, Get, Param, Delete } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { Region } from './entity/region.entity';

@Controller('regions')
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) {}

  @Get()
  findAll(): Promise<Region[]> {
    return this.regionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Region> {
    return this.regionsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.regionsService.remove(+id);
  }
}
