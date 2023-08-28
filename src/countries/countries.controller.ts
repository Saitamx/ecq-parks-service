import { Controller, Get, Param, Delete } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { Country } from './entity/country.entity';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  findAll(): Promise<Country[]> {
    return this.countriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Country> {
    return this.countriesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.countriesService.remove(+id);
  }
}
