import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class Location {
  @ApiProperty({ description: 'Park address' })
  @IsString()
  address: string;

  @ApiProperty({ description: 'Commune where the park is located' })
  @IsString()
  commune: string;

  @ApiProperty({ description: 'Latitude' })
  @IsNumber()
  latitude: number;

  @ApiProperty({ description: 'Longitude' })
  @IsNumber()
  longitude: number;
}
