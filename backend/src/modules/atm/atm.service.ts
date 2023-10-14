import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Atm } from './model/atm.model';
import { LocationSpec, ServiceFilterSpec } from 'src/interfaces';
import {
  getAtmByLocation,
  getAtmByLocationWithFilters,
  getAtmIdsByLocation,
  getById,
} from './sql';

@Injectable()
export class AtmService {
  constructor(
    @InjectRepository(Atm)
    private atmRepository: Repository<Atm>,
  ) {}

  async getAtmByLocation(location: LocationSpec) {
    const data = await this.atmRepository.query(getAtmByLocation(location));
    return data[0].json_agg;
  }

  async getAtmByLocationWithFilters(
    location: LocationSpec,
    filters: ServiceFilterSpec,
  ) {
    let bool = false;
    for (const prop in filters) {
      if (filters[prop] === true) {
        bool = true;
      }
    }

    if (bool === true) {
      const filterConditions = this.createFilterCondition(filters);
      const data = await this.atmRepository.query(
        getAtmByLocationWithFilters(location, filterConditions),
      );
      return data[0].json_agg;
    }

    const data = await this.atmRepository.query(getAtmByLocation(location));
    return data[0].json_agg;
  }

  async getAtmIdsByLocation(location: LocationSpec) {
    const data = await this.atmRepository.query(getAtmIdsByLocation(location));
    return data[0].json_agg;
  }

  async getById(id: string) {
    const data = await this.atmRepository.query(getById(id));
    return data[0].json_agg[0];
  }

  createFilterCondition(filters: ServiceFilterSpec) {
    let data = '';
    for (const prop in filters) {
      if (filters[prop] === true) {
        data += `"serv"."${prop}"->>'serviceActivity' IN ( 'AVAILABLE','UNKNOWN' ) AND `;
      }
    }
    return data.slice(0, -4);
  }
}
