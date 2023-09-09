import { NearbyServices } from '../interfaces/nearby-services.interface';
import { Features } from '../interfaces/features.interface';
import { Location } from '../interfaces/location.interface';
import { Images } from '../interfaces/images.interface';

import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNumber,
  IsString,
  IsArray,
  IsObject,
  ValidateNested,
  IsOptional,
} from 'class-validator';

export class UpdateParkDto {
  @ApiProperty({ description: 'Park name', required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ description: 'Park Commune', required: false })
  @IsString()
  @IsOptional()
  commune?: string;

  @ApiProperty({ description: 'Park ranking', required: false })
  @IsNumber()
  @IsOptional()
  ranking?: number;

  @ApiProperty({ description: 'Park description', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Park location', required: false })
  @IsObject()
  @ValidateNested()
  @Type(() => Location)
  @IsOptional()
  location?: Location;

  @ApiProperty({ description: 'Park features', required: false })
  @IsObject()
  @ValidateNested()
  @Type(() => Features)
  @IsOptional()
  features?: Features;

  @ApiProperty({ description: 'Images of the park', required: false })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Images)
  @IsOptional()
  images?: Images[];

  @ApiProperty({ description: 'Nearby services to the park', required: false })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NearbyServices)
  @IsOptional()
  nearby_services?: NearbyServices[];
}
