import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtmService } from './atm.service';
import { AtmController } from './atm.controller';
import { Atm } from './model/atm.model';
import { AtmServices } from './model/services.model';

@Module({
  imports: [TypeOrmModule.forFeature([Atm, AtmServices])],
  providers: [AtmService],
  controllers: [AtmController],
  exports: [AtmService],
})
export class AtmModule {}
