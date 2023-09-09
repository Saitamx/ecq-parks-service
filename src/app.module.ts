import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParksModule } from './parks/parks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkEntity } from './parks/entity/park.entity';
// import { parse } from 'pg-connection-string';

// const databaseUrl = process.env.DATABASE_URL;
// const connectionOptions = databaseUrl ? parse(databaseUrl) : null;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // Aquí va tu URL de conexión de ElephantSQL
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

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: connectionOptions ? connectionOptions.host : 'localhost',
//       port: connectionOptions ? parseInt(connectionOptions.port, 10) : 5432,
//       username: connectionOptions ? connectionOptions.user : 'ecoquerai',
//       password: connectionOptions ? connectionOptions.password : '2357',
//       database: connectionOptions
//         ? connectionOptions.database
//         : 'parks_service',
//       entities: [ParkEntity],
//       synchronize: true,
//       ssl: connectionOptions ? { rejectUnauthorized: false } : false,
//     }),
//     ParksModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
