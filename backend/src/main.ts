import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors({
    allowedHeaders: [
      'Authorization',
      'Accept,Origin',
      'DNT',
      'X-CustomHeader',
      'Keep-Alive',
      'User-Agent',
      'X-Requested-With',
      'If-Modified-Since',
      'Cache-Control',
      'Content-Type',
      'Content-Range',
      'Range',
    ],
    methods: ['GET,POST,OPTIONS,PUT,DELETE,PATCH'],
  });
  app.setGlobalPrefix('api');
  //app.useGlobalPipes(new ValidationPipe());
  if (configService.get('config.nodeEnv') !== 'production') {
    const config = new DocumentBuilder()
      .setTitle(`Route Finder`)
      .setDescription(`Оптимальный путь к вашему банку`)
      .setVersion(`1.0.0`)
      .addServer(`${configService.get('config.server.api')}`)
      .addBearerAuth()
      .addCookieAuth('authCookie', {
        type: 'http',
        in: 'Header',
        scheme: 'Bearer',
        description: 'session=bearer token',
      })
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/docs', app, document);
  }

  await app.listen(configService.get('config.server.port'), () => {
    console.log(`BASE URL: ${configService.get('config.server.api')}`);
  });
}
bootstrap();
