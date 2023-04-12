import { ApiProperty } from '@nestjs/swagger';

export class ParkListDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  images: string[];
}
