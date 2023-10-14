export enum AtmServiceActivity {
  AVAILABLE = 'AVAILABLE',
  UNAVAILABLE = 'UNAVAILABLE',
  UNKNOWN = 'UNKNOWN',
}

export enum AtmServiceCapability {
  SUPPORTED = 'SUPPORTED',
  UNSUPPORTED = 'UNSUPPORTED',
  UNKNOWN = 'UNKNOWN',
}

export enum OpenHoursDays {
  MONDAY = 'пн',
  TUESDAY = 'вт',
  WEDNESDAY = 'ср',
  THURSDAY = 'чт',
  FRIDAY = 'пт',
  SATURDAY = 'сб',
  SUNDAY = 'вс',
  NO = 'Не обслуживает ЮЛ',
}

export enum OpenHoursIndividualDays {
  MONDAY = 'пн',
  TUESDAY = 'вт',
  WEDNESDAY = 'ср',
  THURSDAY = 'чт',
  FRIDAY = 'пт',
  SATURDAY = 'сб',
  SUNDAY = 'вс',
  NO = 'Не обслуживает ФЛ',
}

export enum Rko {
  YES = 'есть РКО',
  NO = 'нет РКО',
}
