import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { BankFilterSpec, LocationSpec } from '../../interfaces';
import { BankService } from './bank.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  BankFilterDto,
  LocationSpecDto,
  getFullBankInfoResponseDto,
  getShortBankInfo,
} from 'src/constants';

@ApiTags(`Банковские отделения`)
@Controller(`bank`)
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @ApiOperation({
    summary: `Получить полные данные по банковским отделениям по геолокации`,
  })
  @ApiQuery({ type: LocationSpecDto })
  @ApiResponse({ status: 200, type: [getFullBankInfoResponseDto] })
  @ApiResponse({ status: 400, description: `BAD_REQUEST` })
  @ApiResponse({ status: 500, description: `INTERNAL_SERVER_ERROR` })
  @Get('/location')
  async getBankByLocation(@Query() location: LocationSpec) {
    return await this.bankService.getBankByLocation(location);
  }

  @ApiOperation({
    summary: `Получить краткие данные по банковским отделениям по геолокации`,
  })
  @ApiQuery({ type: LocationSpecDto })
  @ApiResponse({ status: 200, type: [getShortBankInfo] })
  @ApiResponse({ status: 400, description: `BAD_REQUEST` })
  @ApiResponse({ status: 500, description: `INTERNAL_SERVER_ERROR` })
  @Get('/ids')
  async getBankIdsByLocation(@Query() location: LocationSpec) {
    return await this.bankService.getBankIdsByLocation(location);
  }

  @ApiOperation({
    summary: `Получить полные данные по банковским отделениям по id`,
  })
  @ApiParam({
    name: 'id',
    required: true,
  })
  @ApiResponse({ status: 200, type: getFullBankInfoResponseDto })
  @ApiResponse({ status: 400, description: `BAD_REQUEST` })
  @ApiResponse({ status: 500, description: `INTERNAL_SERVER_ERROR` })
  @Get('/:id')
  async getById(@Param('id') id: string) {
    return await this.bankService.getById(id);
  }

  @ApiOperation({
    summary: `Получить полные данные по банковским отделениям по геолокации и фильтрам`,
  })
  @ApiQuery({ type: LocationSpecDto })
  @ApiBody({ type: BankFilterDto })
  @ApiResponse({ status: 201, type: [getFullBankInfoResponseDto] })
  @ApiResponse({ status: 400, description: `BAD_REQUEST` })
  @ApiResponse({ status: 500, description: `INTERNAL_SERVER_ERROR` })
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
