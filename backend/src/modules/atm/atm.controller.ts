import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AtmService } from './atm.service';
import { LocationSpec } from 'src/interfaces';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  LocationSpecDto,
  ServiceFilterDto,
  getFullAtmInfoResponseDto,
  getShortAtmInfo,
} from 'src/constants';

@ApiTags(`Банкоматы`)
@Controller(`atm`)
export class AtmController {
  constructor(private readonly atmService: AtmService) {}

  @ApiOperation({
    summary: `Получить полные данные по банкоматам  по геолокации`,
  })
  @ApiQuery({ type: LocationSpecDto })
  @ApiResponse({ status: 200, type: [getFullAtmInfoResponseDto] })
  @ApiResponse({ status: 400, description: `BAD_REQUEST` })
  @ApiResponse({ status: 500, description: `INTERNAL_SERVER_ERROR` })
  @Get('/location')
  async getAtmByLocation(@Query() location: LocationSpec) {
    return await this.atmService.getAtmByLocation(location);
  }

  @ApiOperation({
    summary: `Получить полные данные по банкоматам по геолокации и фильтрам`,
  })
  @ApiQuery({ type: LocationSpecDto })
  @ApiBody({ type: ServiceFilterDto })
  @ApiResponse({ status: 201, type: [getFullAtmInfoResponseDto] })
  @ApiResponse({ status: 400, description: `BAD_REQUEST` })
  @ApiResponse({ status: 500, description: `INTERNAL_SERVER_ERROR` })
  @Post('/locationfilters')
  async getAtmByLocationWithFilters(
    @Query() location: LocationSpecDto,
    @Body() filter: ServiceFilterDto,
  ) {
    return await this.atmService.getAtmByLocationWithFilters(location, filter);
  }

  @ApiOperation({
    summary: `Получить краткие данные по банкоматам по геолокации`,
  })
  @ApiQuery({ type: LocationSpecDto })
  @ApiResponse({ status: 200, type: [getShortAtmInfo] })
  @ApiResponse({ status: 400, description: `BAD_REQUEST` })
  @ApiResponse({ status: 500, description: `INTERNAL_SERVER_ERROR` })
  @Get('/ids')
  async getAtmIdsByLocation(@Query() location: LocationSpec) {
    return await this.atmService.getAtmIdsByLocation(location);
  }

  @ApiOperation({
    summary: `Получить полные данные банкомата по id`,
  })
  @ApiParam({
    name: 'id',
    required: true,
  })
  @ApiResponse({ status: 200, type: getFullAtmInfoResponseDto })
  @ApiResponse({ status: 400, description: `BAD_REQUEST` })
  @ApiResponse({ status: 500, description: `INTERNAL_SERVER_ERROR` })
  @Get('/:id')
  async getById(@Param('id') id: string) {
    return await this.atmService.getById(id);
  }
}
