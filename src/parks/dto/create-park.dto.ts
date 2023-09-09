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

export class CreateParkDto {
  @ApiProperty({ description: 'Park name' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Park Commune' })
  @IsString()
  commune: string;

  @ApiProperty({ description: 'Park ranking' })
  @IsNumber()
  @IsOptional()
  ranking?: number;

  @ApiProperty({ description: 'Park description' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Park location' })
  @IsObject()
  @ValidateNested()
  @Type(() => Location)
  location: Location;

  @ApiProperty({ description: 'Park features' })
  @IsObject()
  @ValidateNested()
  @Type(() => Features)
  features: Features;

  @ApiProperty({ description: 'Images of the park' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Images)
  @IsOptional()
  images?: Images[];

  @ApiProperty({ description: 'Nearby services to the park' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NearbyServices)
  @IsOptional()
  nearby_services?: NearbyServices[];
}
