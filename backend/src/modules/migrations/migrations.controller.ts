import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AtmServices } from '../atm/model/services.model';
import { Repository } from 'typeorm';
import { Atm } from '../atm/model/atm.model';
import JsonFileAtm from './atms.json';
import JsonFileBanks from './bank.json';
import { Bank } from '../bank/model/bank.model';
import { Workload } from '../bank/model/workload.model';

@Controller(`migration`)
export class MigrationController {
  private JsonAtms = JsonFileAtm;
  private JsonBanks = JsonFileBanks;

  constructor(
    @InjectRepository(Atm)
    private atmRepository: Repository<Atm>,
    @InjectRepository(AtmServices)
    private atmServicesRepository: Repository<AtmServices>,
    @InjectRepository(Bank)
    private bankRepository: Repository<Bank>,
    @InjectRepository(Workload)
    private workloadRepository: Repository<Workload>
  ) {}

  @Get('/job')
  async handleCronWorkload() {
    let timerId = setInterval(async () => {
      console.log('handleCronWorkload');
      const ids = await this.workloadRepository.query(
        'select id from public."BankWorkload"',
      );
      for (let obj of ids) {
        await this.workloadRepository
          .createQueryBuilder()
          .update()
          .set({
            workload: {
              monday: Math.floor(Math.random() * 10),
              tuesday: Math.floor(Math.random() * 10),
              wednesday: Math.floor(Math.random() * 10),
              thursday: Math.floor(Math.random() * 10),
              friday: Math.floor(Math.random() * 10),
              saturday: Math.floor(Math.random() * 10),
              sunday: Math.floor(Math.random() * 10),
            },
          })
          .where(`id = '${obj.id}'`)
          .execute();
      }
    }, 300000);
  }

  @Get('/migrationAtm')
  async migrationAtm() {
    for await (const atm of this.JsonAtms.atms) {
      const serviceData = await this.atmServicesRepository.save(atm.services);
      await this.atmRepository.save({
        address: atm.address,
        allDay: atm.allDay,
        point: {
          type: 'Point',
          coordinates: [atm.longitude, atm.latitude],
        },
        services: [serviceData],
      });
    }
  }

  @Get('/migrationBank')
  async migrationBank() {
    console.log(this.JsonBanks.length);
    for await (const bank of this.JsonBanks) {
      const workloadData = await this.workloadRepository.save({
        workload: {
          monday: Math.floor(Math.random() * 10),
          tuesday: Math.floor(Math.random() * 10),
          wednesday: Math.floor(Math.random() * 10),
          thursday: Math.floor(Math.random() * 10),
          friday: Math.floor(Math.random() * 10),
          saturday: Math.floor(Math.random() * 10),
          sunday: Math.floor(Math.random() * 10),
        },
      });
      await this.bankRepository.save({
        salePointName: bank.salePointName,
        address: bank.address,
        status: bank.status,
        rko: bank.rko,
        officeType: bank.officeType,
        salePointFormat: bank.salePointFormat,
        suoAvailability: bank.suoAvailability,
        hasRamp: bank.hasRamp,
        metroStation: bank.metroStation,
        distance: bank.distance,
        kep: bank.kep,
        myBranch: bank.myBranch,
        point: {
          type: 'Point',
          coordinates: [bank.longitude, bank.latitude],
        },
        openHours: bank.openHours,
        openHoursIndividual: bank.openHoursIndividual,
        createDateTime: new Date(),
        lastChangedDateTime: new Date(),
        workload: workloadData,
      });
    }
  }
}