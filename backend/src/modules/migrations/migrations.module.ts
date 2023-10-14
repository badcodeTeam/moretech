import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtmServices } from '../atm/model/services.model';
import { Atm } from '../atm/model/atm.model';
import { MigrationController } from './migrations.controller';
import { Workload } from '../bank/model/workload.model';
import { Bank } from '../bank/model/bank.model';
@Module({
  imports: [TypeOrmModule.forFeature([Atm, AtmServices, Bank, Workload])],
  providers: [],
  controllers: [MigrationController],
  exports: [],
})
export class MigrationModule {}
