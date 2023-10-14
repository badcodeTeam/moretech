import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AtmServices } from '../atm/model/services.model';
import { Repository } from 'typeorm';
import { Atm } from '../atm/model/atm.model';
import JsonFileAtm from './atms.json';

@Controller(`migration`)
export class MigrationController {
  private JsonAtms = JsonFileAtm;

  constructor(
    @InjectRepository(Atm)
    private atmRepository: Repository<Atm>,
    @InjectRepository(AtmServices)
    private atmServicesRepository: Repository<AtmServices>,
  ) {}

  @Get('/migration')
  async migration() {
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
}
