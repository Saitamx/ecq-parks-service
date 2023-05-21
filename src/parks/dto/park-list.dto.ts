import { ApiProperty } from '@nestjs/swagger';

export class ParkListDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  ranking: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  images: string[];
}
