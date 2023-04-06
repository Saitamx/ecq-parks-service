import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsBoolean,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class Location {
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsNumber()
  latitude: number;

  @IsNotEmpty()
  @IsNumber()
  longitude: number;
}

class Security {
  @IsNotEmpty()
  @IsBoolean()
  cameras: boolean;

  @IsNotEmpty()
  @IsBoolean()
  security_personnel: boolean;
}

class Features {
  @IsNotEmpty()
  @IsBoolean()
  pet_friendly: boolean;

  @IsNotEmpty()
  @IsBoolean()
  bike_parking: boolean;

  @IsNotEmpty()
  @IsBoolean()
  car_parking: boolean;

  @IsNotEmpty()
  @IsBoolean()
  trash_bins: boolean;

  @IsNotEmpty()
  @IsBoolean()
  water_fountain: boolean;

  @IsNotEmpty()
  @IsBoolean()
  shade: boolean;

  @IsNotEmpty()
  @IsBoolean()
  rest_areas: boolean;

  @IsNotEmpty()
  @IsBoolean()
  lighting: boolean;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Security)
  security: Security;
}

class NearbyService {
  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  distance: number;
}

export class CreateParkDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Location)
  location: Location;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Features)
  features: Features;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  images: string[];

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NearbyService)
  nearby_services: NearbyService[];
}
