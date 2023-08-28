import { Controller, Get, Param, Delete } from '@nestjs/common';
import { ContinentsService } from './continents.service';
import { Continent } from './entity/continent.entity';

@Controller('continents')
export class ContinentsController {
  constructor(private readonly continentsService: ContinentsService) {}

  @Get()
  findAll(): Promise<Continent[]> {
    return this.continentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Continent> {
    return this.continentsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.continentsService.remove(+id);
  }
}
