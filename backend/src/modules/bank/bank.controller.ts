import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { LocationSpec} from '../../interfaces';
import { BankService } from './bank.service';

@Controller(`bank`)
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Get('/location')
  async getAtmByLocation(@Query() location: LocationSpec) {
    return await this.bankService.getAtmByLocation(location);
  }

  @Get('/ids')
  async getAtmIdsByLocation(@Query() location: LocationSpec) {
    return await this.bankService.getAtmIdsByLocation(location);
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    return await this.bankService.getById(id);
  }
}
