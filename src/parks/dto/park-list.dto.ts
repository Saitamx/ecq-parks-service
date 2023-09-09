import { Images } from '../interfaces/images.interface';

import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString, IsArray, ValidateNested } from 'class-validator';

export class ParkListDto {
  @ApiProperty({ description: 'Park name' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Park ranking' })
  @IsNumber()
  ranking: number;

  @ApiProperty({ description: 'Park description' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Images of the park' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Images)
  images: Images[];
}
