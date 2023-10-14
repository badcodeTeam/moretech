import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AtmService } from './atm.service';
import { LocationSpec, ServiceFilterSpec } from '../../interfaces';

@Controller(`atm`)
export class AtmController {
  constructor(private readonly atmService: AtmService) {}
  
  @Get('/location')
  async getAtmByLocation(@Query() location: LocationSpec) {
    return await this.atmService.getAtmByLocation(location);
  }

  @Post('/locationfilters')
  async getAtmByLocationWithFilters(
    @Query() location: LocationSpec,
    @Body() filter: ServiceFilterSpec,
  ) {
    return await this.atmService.getAtmByLocationWithFilters(location, filter);
  }

  @Get('/ids')
  async getAtmIdsByLocation(@Query() location: LocationSpec) {
    return await this.atmService.getAtmIdsByLocation(location);
  }

  @Get('/:id')
  async getById(
    @Param('id') id: string,
  ) {
    return await this.atmService.getById(id);
  }
}
