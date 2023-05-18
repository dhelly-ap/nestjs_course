import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  const PORT = process.env.PORT || 8000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Nestjs application')
  .setDescription('Learning how to do backend service with Nestjs and Postgres')
  .setVersion('1.0.0')
  .addTag('DHelly')
  .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () => console.log('Server start on port ' + PORT));
}

start();