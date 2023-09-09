import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class Images {
  @ApiProperty({ description: 'Web optimized version' })
  @IsString()
  web: string;

  @ApiProperty({ description: 'Mobile optimized version' })
  @IsString()
  mobile: string;

  @ApiProperty({
    description: 'Alt text for the image',
  })
  @IsString()
  alt: string;
}
