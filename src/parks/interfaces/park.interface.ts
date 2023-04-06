import { ApiProperty } from '@nestjs/swagger';

export class Park {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  location: {
    address: string;
    latitude: number;
    longitude: number;
  };

  @ApiProperty()
  features: {
    pet_friendly: boolean;
    bike_parking: boolean;
    car_parking: boolean;
    trash_bins: boolean;
    water_fountain: boolean;
    shade: boolean;
    rest_areas: boolean;
    lighting: boolean;
    security: {
      cameras: boolean;
      security_personnel: boolean;
    };
  };

  @ApiProperty()
  images: string[];

  @ApiProperty()
  nearby_services: {
    type: string;
    name: string;
    distance: number;
  }[];
}
