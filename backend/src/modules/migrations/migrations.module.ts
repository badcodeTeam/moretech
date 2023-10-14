import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtmServices } from '../atm/model/services.model';
import { Atm } from '../atm/model/atm.model';
import { MigrationController } from './migrations.service';

@Module({
  imports: [TypeOrmModule.forFeature([Atm, AtmServices])],
  providers: [],
  controllers: [MigrationController],
  exports: [],
})
export class MigrationModule {}
