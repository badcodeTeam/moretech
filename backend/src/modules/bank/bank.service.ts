import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bank } from './model/bank.model';
import { LocationSpec } from 'src/interfaces';
import { getBankByLocation, getBankIdsByLocation, getById } from './sql';

@Injectable()
export class BankService {
  constructor(
    @InjectRepository(Bank)
    private bankRepository: Repository<Bank>,
  ) {}

  async getAtmByLocation(location: LocationSpec) {
    const data = await this.bankRepository.query(getBankByLocation(location));
    return data[0].json_agg;
  }

  async getAtmIdsByLocation(location: LocationSpec) {
    const data = await this.bankRepository.query(
      getBankIdsByLocation(location),
    );
    return data[0].json_agg;
  }

  async getById(id: string) {
    const data = await this.bankRepository.query(getById(id));
    return data[0].json_agg[0];
  }
}
