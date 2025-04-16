import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import * as path from 'path';
import * as process from 'node:process';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import validatorFactory from './validator.factory';

config({
  path: path.join(process.cwd(), '..', '.env'),
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //@TODO не забыть убрать
  app.enableCors({
    origin: process?.env?.CORS_ORIGIN?.split(','),
    exposedHeaders: ['array-length'],
    credentials: true,
  });

  app.setGlobalPrefix('/api');
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: validatorFactory,
    }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Cadex API')
    .setDescription('Документация swagger')
    .setVersion('0.1')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('/api/swagger', app, swaggerDocument, {
    // customCssUrl: process.env.STATIC_URL + '/swagger.css',
  });

  await app.listen(process.env.API_PORT ?? 5132, () => {
    Logger.log(
      `server started on http://localhost:${process.env.API_PORT}/api`,
    );
  });
}
bootstrap();
