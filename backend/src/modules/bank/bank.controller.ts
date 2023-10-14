import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { BankFilterSpec, LocationSpec} from '../../interfaces';
import { BankService } from './bank.service';

@Controller(`bank`)
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Get('/location')
  async getBankByLocation(@Query() location: LocationSpec) {
    return await this.bankService.getBankByLocation(location);
  }

  @Get('/ids')
  async getBankIdsByLocation(@Query() location: LocationSpec) {
    return await this.bankService.getBankIdsByLocation(location);
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    return await this.bankService.getById(id);
  }

  @Post('/locationfilters')
  async getBankByLocationWithFilters(
    @Query() location: LocationSpec,
    @Body() filter: BankFilterSpec,
  ) {
    return await this.bankService.getBankByLocationWithFilters(
      location,
      filter,
    );
  }
}
