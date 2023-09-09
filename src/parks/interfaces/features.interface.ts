import { IsBoolean, IsObject, ValidateNested } from 'class-validator';
import { Security } from './security.interface';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class Features {
  @ApiProperty({ description: 'Pet friendly park' })
  @IsBoolean()
  pet_friendly: boolean;

  @ApiProperty({ description: 'Availability of bike parking' })
  @IsBoolean()
  bike_parking: boolean;

  @ApiProperty({ description: 'Availability of car parking' })
  @IsBoolean()
  car_parking: boolean;

  @ApiProperty({ description: 'Presence of trash bins' })
  @IsBoolean()
  trash_bins: boolean;

  @ApiProperty({ description: 'Presence of water fountains' })
  @IsBoolean()
  water_fountain: boolean;

  @ApiProperty({ description: 'Availability of shaded areas' })
  @IsBoolean()
  shade: boolean;

  @ApiProperty({ description: 'Availability of rest areas' })
  @IsBoolean()
  rest_areas: boolean;

  @ApiProperty({ description: 'Park lighting' })
  @IsBoolean()
  lighting: boolean;

  @ApiProperty({ description: 'Security details of the park' })
  @IsObject()
  @ValidateNested()
  @Type(() => Security)
  security: Security;
}
