import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class FilterParksDto {
  @ApiProperty({ description: 'Filter by parms', required: false })
  @IsString()
  @IsOptional()
  commune?: string;
}
