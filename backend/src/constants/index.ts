import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export const BANK_TABLE_NAME = 'Bank';
export const ATM_TABLE_NAME = 'Atm';
export const ATM_SERVICES_TABLE_NAME = 'AtmServices';
export const BANK_WORKLOAD_TABLE_NAME = 'BankWorkload';

export class LocationSpecDto {
  @ApiProperty({
    example: 33.666062322,
    description: `Долгота'`,
  })
  @Type(() => Number)
  longitude: number;

  @ApiProperty({
    example: 44.556627232,
    description: `Широта'`,
  })
  @Type(() => Number)
  latitude: number;
}

export class ServiceFilterDto {
  @ApiProperty({
    example: true,
    description: `Для маломобильных`,
  })
  wheelchair: boolean;

  @ApiProperty({
    example: true,
    description: `NFC`,
  })
  nfcForBankCards: boolean;

  @ApiProperty({
    example: true,
    description: `QR`,
  })
  qrRead: boolean;

  @ApiProperty({
    example: true,
    description: `Доллары`,
  })
  supportsUsd: boolean;

  @ApiProperty({
    example: true,
    description: `Обмен валют`,
  })
  supportsChargeRub: boolean;

  @ApiProperty({
    example: true,
    description: `Евро`,
  })
  supportsEur: boolean;

  @ApiProperty({
    example: true,
    description: `Рубли`,
  })
  supportsRub: boolean;
}
export class BankFiltersDto {
  @ApiProperty({
    example: true,
    description: `РКО`,
  })
  rko: boolean;

  @ApiProperty({
    example: true,
    description: `Для маломобильных`,
  })
  hasRamp: boolean;

  @ApiProperty({
    example: true,
    description: `Система управления очередью`,
  })
  suoAvailability: boolean;
}

export class BankFilterDto {
  @ApiProperty({
    example: true,
    description: `Фильтр по загрузке банковского отделения`,
  })
  load: boolean;

  @ApiProperty({
    example: BankFiltersDto,
    description: `Фильтры поиска банковского отделения`,
  })
  filter: BankFiltersDto;
}

export class getAtmByLocationResponseDto {

}

export class getAtmByLocationWithFilters {

}

export class  getAtmIdsByLocation {

}

export class getById {

}