import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bank } from './model/bank.model';
import { BankFilterSpec, LocationSpec } from 'src/interfaces';
import { byLoad, byLoadWithFilters, getBankByLocation, getBankIdsByLocation, getBankWithFilters, getById } from './sql';

@Injectable()
export class BankService {
  constructor(
    @InjectRepository(Bank)
    private bankRepository: Repository<Bank>,
  ) {}

  async getBankByLocation(location: LocationSpec) {
    const data = await this.bankRepository.query(getBankByLocation(location));
    return data[0].json_agg;
  }

  async getBankIdsByLocation(location: LocationSpec) {
    const data = await this.bankRepository.query(
      getBankIdsByLocation(location),
    );
    return data[0].json_agg;
  }

  async getById(id: string) {
    const data = await this.bankRepository.query(getById(id));
    return data[0].json_agg[0];
  }

  async getBankByLocationWithFilters(
    location: LocationSpec,
    filters: BankFilterSpec,
  ) {
    let bool = false;
    for (const prop in filters.filter) {
      if (filters[prop] === true) {
        bool = true;
      }
    }

    if (filters.load === true && bool === false) {
      //только загрузка
      const data = await this.bankRepository.query(byLoad(location));
      return data[0].json_agg;
    }
    if (filters.load === true && bool === true) {
      //загрузка и фильтрация
      const queryfilters = this.createFilterCondition(filters);
      const data = await this.bankRepository.query(
        byLoadWithFilters(location, queryfilters),
      );
      return data[0].json_agg;
    }
    if (filters.load === false && bool === true) {
      //только фильтрация
      const queryfilters = this.createFilterCondition(filters);
      const data = await this.bankRepository.query(
        getBankWithFilters(location, queryfilters),
      );
      return data[0].json_agg;
    }
    if (filters.load === false && bool === false) {
      //все
      const data = await this.bankRepository.query(getBankByLocation(location));
      return data[0].json_agg;
    }
  }

  createFilterCondition(filters: BankFilterSpec) {
    let data = '';
    for (const prop in filters.filter) {
      if (filters[prop] === true) {
        data += `"workload"."workload"."${prop}"->>'true' IN ('Y', 'Есть РКО') AND `;
      }
    }
    return data.slice(0, -4);
  }
}

