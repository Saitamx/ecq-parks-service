import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParksModule } from './parks/parks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkEntity } from './parks/entity/park.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [ParkEntity],
      synchronize: true,
      ssl:
        process.env.NODE_ENV === 'production'
          ? { rejectUnauthorized: false }
          : false,
    }),
    ParksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
