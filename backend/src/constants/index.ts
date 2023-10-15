import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  AtmServiceActivity,
  AtmServiceCapability,
  OpenHoursDays,
  OpenHoursIndividualDays,
  Rko,
} from 'src/enum';

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

export class PointDto {
  @ApiProperty({
    example: 'Point',
    description: `Тип географии`,
  })
  type: 'Point';

  @ApiProperty({
    example: [37.704547, 55.802432],
    description: `Координаты longitude latitude`,
  })
  coordinates: number[];
}
export class getShortAtmInfo {
  @ApiProperty({
    example: 'eea4723e-7b65-46c4-ad36-34b55ab80947',
    description: `Id банкомата`,
  })
  id: string;

  @ApiProperty({
    example: 'ул. Богородский Вал, д. 6, корп. 1',
    description: `Круглосуточный`,
  })
  address: string;

  @ApiProperty({
    example: false,
    description: `Круглосуточный`,
  })
  allDay: false;

  @ApiProperty({
    example: PointDto,
    description: `Геопозиция банкомата`,
  })
  point: PointDto;
}

export class AtmServicesStatusDto {
  @ApiProperty({
    enum: AtmServiceActivity,
    description: `Доступность услуги в данный момент`,
  })
  serviceActivity: AtmServiceActivity;

  @ApiProperty({
    enum: AtmServiceCapability,
    description: `Возможность указания услуги`,
  })
  serviceCapability: AtmServiceCapability;
}

export class AtmServicesDto {
  @ApiProperty({
    example: 'eea4723e-7b65-46c4-ad36-34b55ab80947',
    description: `Id таблицы услуг`,
  })
  id: string;

  @ApiProperty({
    example: AtmServicesStatusDto,
    description: `Для маломобильных`,
  })
  wheelchair: AtmServicesStatusDto;

  @ApiProperty({
    example: AtmServicesStatusDto,
    description: `NFC`,
  })
  nfcForBankCards: AtmServicesStatusDto;

  @ApiProperty({
    example: AtmServicesStatusDto,
    description: `QR`,
  })
  qrRead: AtmServicesStatusDto;

  @ApiProperty({
    example: AtmServicesStatusDto,
    description: `Доллары`,
  })
  supportsUsd: AtmServicesStatusDto;

  @ApiProperty({
    example: AtmServicesStatusDto,
    description: `Обмен валют`,
  })
  supportsChargeRub: AtmServicesStatusDto;

  @ApiProperty({
    example: AtmServicesStatusDto,
    description: `Евро`,
  })
  supportsEur: AtmServicesStatusDto;

  @ApiProperty({
    example: AtmServicesStatusDto,
    description: `Рубли`,
  })
  supportsRub: AtmServicesStatusDto;

  @ApiProperty({
    example: '2023-10-14T14:53:03.717864+00:00',
    description: 'Дата создания',
  })
  createDateTime: string;

  @ApiProperty({
    example: '2023-10-14T14:53:03.717864+00:00',
    description: 'Дата обновления',
  })
  lastChangedDateTime: string;
}

export class getFullAtmInfoResponseDto {
  @ApiProperty({
    example: 'eea4723e-7b65-46c4-ad36-34b55ab80947',
    description: `Id банкомата`,
  })
  id: string;

  @ApiProperty({
    example: 'ул. Богородский Вал, д. 6, корп. 1',
    description: `Круглосуточный`,
  })
  address: string;

  @ApiProperty({
    example: false,
    description: `Круглосуточный`,
  })
  allDay: false;

  @ApiProperty({
    example: PointDto,
    description: `Геопозиция банкомата`,
  })
  point: PointDto;

  @ApiProperty({
    example: AtmServicesDto,
    description: `Услуги банкомата`,
  })
  services: AtmServicesDto;
}

export class openHoursService {
  @ApiProperty({
    enum: OpenHoursDays,
    description: `Рабочие дни`,
  })
  days: OpenHoursDays;

  @ApiProperty({
    example: '10:00-19:00',
    description: `Рабочее время`,
  })
  hours: string | null;
}

export class openHoursIndividualService {
  @ApiProperty({
    enum: OpenHoursIndividualDays,
    description: `Рабочие дни`,
  })
  days: OpenHoursIndividualDays;

  @ApiProperty({
    example: '10:00-19:00',
    description: `Рабочее время`,
  })
  hours: string | null;
}

export class getShortBankInfo {
  @ApiProperty({
    example: 'eea4723e-7b65-46c4-ad36-34b55ab80947',
    description: `Id банковского отделения`,
  })
  id: string;

  @ApiProperty({
    example: 'ДО «Лобня» Филиала № 7701 Банка ВТБ (ПАО)',
    description: `Название банковского отделения`,
  })
  salePointName: string;

  @ApiProperty({
    example: '141730, Московская область, г. Лобня, ул. Ленина, д. 9',
    description: `Адрес банковского отделения`,
  })
  address: string;

  @ApiProperty({
    example: '141730, Московская область, г. Лобня, ул. Ленина, д. 9',
    description: `РКО`,
  })
  rko: Rko;

  @ApiProperty({
    example: [openHoursService],
    description: `График обслуживания юридических лиц`,
  })
  openHours: openHoursService[];

  @ApiProperty({
    example: [openHoursIndividualService],
    description: `График обслуживания физических лиц`,
  })
  openHoursIndividual: openHoursIndividualService[];

  @ApiProperty({
    example: PointDto,
    description: `Геопозиция банковского отделения`,
  })
  point: PointDto;

  @ApiProperty({
    example: 0,
    description: `Загруженность банковского отделения в настоящее время`,
  })
  load: number;
}

export class WorkloadsDto {
  @ApiProperty({
    example: 4,
    description: `Загруженность банковского отделения в пн`,
  })
  monday: number;

  @ApiProperty({
    example: 3,
    description: `Загруженность банковского отделения в вт`,
  })
  tuesday: number;

  @ApiProperty({
    example: 3,
    description: `Загруженность банковского отделения в ср`,
  })
  wednesday: number;

  @ApiProperty({
    example: 5,
    description: `Загруженность банковского отделения в чт`,
  })
  thursday: number;

  @ApiProperty({
    example: 4,
    description: `Загруженность банковского отделения в пт`,
  })
  friday: number;

  @ApiProperty({
    example: 4,
    description: `Загруженность банковского отделения в сб`,
  })
  saturday: number;

  @ApiProperty({
    example: 4,
    description: `Загруженность банковского отделения в вс`,
  })
  sunday: number;
}
export class getFullBankInfoResponseDto {
  @ApiProperty({
    example: 'eea4723e-7b65-46c4-ad36-34b55ab80947',
    description: `Id банковского отделения`,
  })
  id: string;

  @ApiProperty({
    example: 'ДО «Лобня» Филиала № 7701 Банка ВТБ (ПАО)',
    description: `Название банковского отделения`,
  })
  salePointName: string;

  @ApiProperty({
    example: '141730, Московская область, г. Лобня, ул. Ленина, д. 9',
    description: `Адрес банковского отделения`,
  })
  address: string;

  @ApiProperty({
    example: PointDto,
    description: `Геопозиция банковского отделения`,
  })
  point: PointDto;

  @ApiProperty({
    example: 'открытая',
    description: `Стутус банковского отделения`,
  })
  status: string;
  @ApiProperty({
    example: '141730, Московская область, г. Лобня, ул. Ленина, д. 9',
    description: `РКО`,
  })
  rko: Rko;

  @ApiProperty({
    example: 'Да (Зона Привилегия)',
    description: `Тип банковского отделения`,
  })
  officeType: string;

  @ApiProperty({
    example: 'Универсальный',
    description: `Формат банковского отделения`,
  })
  salePointFormat: string;

  @ApiProperty({
    example: 'Y',
    description: `Система управления очередью`,
  })
  suoAvailability: string;

  @ApiProperty({
    example: 'Y',
    description: `Доступность для маломобильных граждан`,
  })
  hasRamp: string;

  @ApiProperty({
    example: 'МЦД-1 Белорусско-Савёловский диаметр, станция Лобня',
    description: `Станция метро`,
  })
  metroStation: string;

  @ApiProperty({
    example: 29989,
    description: `Расстояние`,
  })
  distance: number;

  @ApiProperty({
    example: true,
    description: `Признак выдачи КЭП`,
  })
  kep: boolean;

  @ApiProperty({
    example: true,
    description: `Признак "Мое отделение"`,
  })
  myBranch: boolean;

  @ApiProperty({
    example: [openHoursService],
    description: `График обслуживания юридических лиц`,
  })
  openHours: openHoursService[];

  @ApiProperty({
    example: [openHoursIndividualService],
    description: `График обслуживания физических лиц`,
  })
  openHoursIndividual: openHoursIndividualService[];

  @ApiProperty({
    example: WorkloadsDto,
    description: `График загрузки банковского отделения`,
  })
  workloads: WorkloadsDto;
  @ApiProperty({
    example: 0,
    description: `Загруженность банковского отделения в настоящее время`,
  })
  load: number;
}
