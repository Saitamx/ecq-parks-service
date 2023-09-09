import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NearbyServices {
  @ApiProperty({ description: 'Type of nearby service' })
  @IsString()
  type: string;

  @ApiProperty({ description: 'Name of the nearby service' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Distance to the nearby service' })
  @IsNumber()
  distance: number;
}
