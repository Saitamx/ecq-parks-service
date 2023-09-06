import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('currencies')
@Controller('currencies')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all currencies' })
  findAll() {
    return this.currencyService.findAll();
  }

  @Get(':code')
  @ApiOperation({ summary: 'Retrieve a currency by its code' })
  findOne(@Param('code') code: string) {
    return this.currencyService.findOne(code);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new currency' })
  create(@Body() createCurrencyDto: CreateCurrencyDto) {
    return this.currencyService.create(createCurrencyDto);
  }

  @Put(':code')
  @ApiOperation({ summary: 'Update an existing currency' })
  update(@Param('code') code: string, @Body() updateData: CreateCurrencyDto) {
    return this.currencyService.update(code, updateData);
  }

  @Delete(':code')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a currency' })
  remove(@Param('code') code: string) {
    return this.currencyService.remove(code);
  }
}
