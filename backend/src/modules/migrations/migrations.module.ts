import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtmServices } from '../atm/model/services.model';
import { Atm } from '../atm/model/atm.model';
import { MigrationController } from './migrations.controller';
import { Workload } from '../bank/model/workload.model';
import { Bank } from '../bank/model/bank.model';
import { SchedulerRegistry } from '@nestjs/schedule';
@Module({
  imports: [TypeOrmModule.forFeature([Atm, AtmServices, Bank, Workload])],
  providers: [SchedulerRegistry],
  controllers: [MigrationController],
  exports: [],
})
export class MigrationModule {}
