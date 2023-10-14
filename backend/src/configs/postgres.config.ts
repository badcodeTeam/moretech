import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Atm } from 'src/modules/atm/model/atm.model';
import { AtmServices } from 'src/modules/atm/model/services.model';
import { Bank } from 'src/modules/bank/model/bank.model';
import { Workload } from 'src/modules/bank/model/workload.model';

export const getPostgresConfig = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => {
  return {
    type: 'postgres',
    host: configService.get('config.postgres.postgresHost'),
    port: configService.get('config.postgres.postgresPort'),
    username: configService.get('config.postgres.postgresUser'),
    password: configService.get('config.postgres.postgresPassword'),
    database: configService.get('config.postgres.postgresDatabase'),
    entities: [Atm, Bank, AtmServices, Atm, Workload],
    synchronize: true,
  };
};
