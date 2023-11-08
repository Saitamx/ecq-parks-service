import { Type } from 'class-transformer';
import { ValidateNested, IsArray } from 'class-validator';
import { CreateParkDto } from './create-park.dto';

export class CreateParksDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateParkDto)
  parks: CreateParkDto[];
}
