import {
  Body,
  Controller,
  Get,
  Post,
  HttpCode,
  HttpStatus,
  BadRequestException,
  NotFoundException,
  Delete,
  Query,
} from '@nestjs/common';
import { ParksService } from './parks.service';
import { Park } from './interfaces/park.interface';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateParkDto } from './dto/create-park.dto';
import logger from '../logger';
import { Param } from '@nestjs/common';
import { Put, ParseIntPipe } from '@nestjs/common';
import { UpdateParkDto } from './dto/update-park.dto';
import { ParkListDto } from './dto/park-list.dto';
import { FilterParksDto } from './dto/filter-park.dto';
import { CreateParksDto } from './dto/create-parks.dto';

@ApiTags('parks')
@Controller('parks')
export class ParksController {
  constructor(private readonly parksService: ParksService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all parks' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of parks',
    type: [Park],
  })
  async findAll(@Query() filterDto: FilterParksDto): Promise<Park[]> {
    return await this.parksService.getParks(filterDto);
  }

  @Get('/list')
  @ApiOperation({
    summary: 'Retrieve a list of parks with limited details',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of parks with limited information',
    type: [ParkListDto],
  })
  async findList(@Query() filterDto: FilterParksDto): Promise<ParkListDto[]> {
    return await this.parksService.getParksList(filterDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a specific park by ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The park has been found.',
    type: Park,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'The park with the specified ID was not found.',
  })
  async findOne(@Param('id') id: string): Promise<Park> {
    const parkId = parseInt(id, 10);
    if (isNaN(parkId)) {
      throw new BadRequestException(`Invalid ID: ${id}`);
    }
    const park = await this.parksService.getParkById(parkId);
    if (!park) {
      throw new NotFoundException(`Park with ID ${parkId} not found.`);
    }
    return park;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new park' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The park has been successfully created.',
    type: Park,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input data.',
  })
  @ApiBody({ type: Park, description: 'Park data' })
  async create(@Body() createParkDto: CreateParkDto): Promise<Park> {
    try {
      const newPark = await this.parksService.create(createParkDto);
      logger.info(`Park created with ID ${newPark.id}`);
      return newPark;
    } catch (error) {
      logger.error(`Error creating park: ${error.message}`);
      throw new BadRequestException(error.message);
    }
  }

  @Post('/multiple')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create multiple parks' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The parks have been successfully created.',
    type: [Park],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input data.',
  })
  @ApiBody({ type: [CreateParkDto], description: 'Data for multiple parks' })
  async createMultiple(
    @Body() createParksDto: CreateParksDto,
  ): Promise<Park[]> {
    try {
      const newParks = await this.parksService.createMultiple(createParksDto);
      newParks.forEach((park) =>
        logger.info(`Park created with ID ${park.id}`),
      );
      return newParks;
    } catch (error) {
      logger.error(`Error creating parks: ${error.message}`);
      throw new BadRequestException(error.message);
    }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing park' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The park has been successfully updated.',
    type: Park,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input data.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'The park with the specified ID was not found.',
  })
  @ApiBody({ type: UpdateParkDto, description: 'Updated park data' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateParkDto: UpdateParkDto,
  ): Promise<Park> {
    try {
      const updatedPark = await this.parksService.update(id, updateParkDto);
      logger.info(`Park with ID ${id} updated`);
      return updatedPark;
    } catch (error) {
      logger.error(`Error updating park with ID ${id}: ${error.message}`);
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a park by ID' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'The park has been successfully deleted.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'The park with the specified ID was not found.',
  })
  async delete(@Param('id') id: number): Promise<void> {
    return this.parksService.delete(id);
  }
}
