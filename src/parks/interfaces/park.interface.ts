import { NearbyServices } from './nearby-services.interface';
import { Features } from './features.interface';
import { Location } from './location.interface';
import { Images } from './images.interface';

import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNumber,
  IsString,
  IsArray,
  IsObject,
  ValidateNested,
} from 'class-validator';

export class Park {
  @ApiProperty({ description: 'Park ID' })
  @IsNumber()
  id: number;

  @ApiProperty({ description: 'Park name' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Park Commune' })
  @IsString()
  commune: string;

  @ApiProperty({ description: 'Park ranking' })
  @IsNumber()
  ranking: number;

  @ApiProperty({ description: 'Park description' })
  @IsString()
  description: string;

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
  images: Images[];

  @ApiProperty({ description: 'Nearby services to the park' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NearbyServices)
  nearby_services: NearbyServices[];
}
