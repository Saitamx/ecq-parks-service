import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class Security {
  @ApiProperty({ description: 'Presence of security cameras' })
  @IsBoolean()
  cameras: boolean;

  @ApiProperty({ description: 'Presence of security personnel' })
  @IsBoolean()
  security_personnel: boolean;
}
