import { Module } from '@nestjs/common';
import { ParksController } from './parks.controller';
import { ParksService } from './parks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkEntity } from './entity/park.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ParkEntity])],
  controllers: [ParksController],
  providers: [ParksService],
})
export class ParksModule {}
