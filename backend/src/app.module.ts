import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  appConfig,
  getPostgresConfig,
} from './configs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtmModule } from './modules/atm/atm.module';
import { MigrationModule } from './modules/migrations/migrations.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: getPostgresConfig,
    }),
    AtmModule,
    MigrationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
