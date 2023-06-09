// update-park.dto.ts
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  IsArray,
  IsBoolean,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class Location {
  @IsString()
  @IsOptional()
  address?: string;

  @IsNumber()
  @IsOptional()
  latitude?: number;

  @IsNumber()
  @IsOptional()
  longitude?: number;
}

class Security {
  @IsBoolean()
  @IsOptional()
  cameras?: boolean;

  @IsBoolean()
  @IsOptional()
  security_personnel?: boolean;
}

class Features {
  @IsBoolean()
  @IsOptional()
  pet_friendly?: boolean;

  @IsBoolean()
  @IsOptional()
  bike_parking?: boolean;

  @IsBoolean()
  @IsOptional()
  car_parking?: boolean;

  @IsBoolean()
  @IsOptional()
  trash_bins?: boolean;

  @IsBoolean()
  @IsOptional()
  water_fountain?: boolean;

  @IsBoolean()
  @IsOptional()
  shade?: boolean;

  @IsBoolean()
  @IsOptional()
  rest_areas?: boolean;

  @IsBoolean()
  @IsOptional()
  lighting?: boolean;

  @ValidateNested()
  @IsOptional()
  @Type(() => Security)
  security?: Security;
}

class NearbyService {
  @IsString()
  @IsOptional()
  type?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  ranking?: number;

  @IsNumber()
  @IsOptional()
  distance?: number;
}

export class UpdateParkDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  ranking?: number;

  @IsString()
  @IsOptional()
  description?: string;

  @ValidateNested()
  @IsOptional()
  @Type(() => Location)
  location?: Location;

  @ValidateNested()
  @IsOptional()
  @Type(() => Features)
  features?: Features;

  @IsArray()
  @IsOptional()
  images?: string[];

  @ValidateNested({ each: true })
  @IsArray()
  @IsOptional()
  @Type(() => NearbyService)
  nearby_services?: NearbyService[];
}
