import * as dotenv from 'dotenv';
import { existsSync } from 'fs';

const envFile = existsSync('.env.local') ? '.env.local' : '.env';
dotenv.config({ path: envFile });

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';

const server = express();

const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  const config = new DocumentBuilder()
    .setTitle('Parks API')
    .setDescription('API for managing parks')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const PORT = process.env.PORT || 3010;

  await app.listen(PORT, () => {
    console.log(`Servidor NestJS en funcionamiento en el puerto ${PORT}`);
  });
};

createNestServer(server);

export { server };
