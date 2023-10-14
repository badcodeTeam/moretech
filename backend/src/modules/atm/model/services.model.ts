import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToMany,
} from 'typeorm';
import { ATM_SERVICES_TABLE_NAME } from '../../../constants';
import { Atm } from './atm.model';

@Entity(ATM_SERVICES_TABLE_NAME)
export class AtmServices {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'jsonb',
  })
  wheelchair: object;

  @Column({
    type: 'jsonb',
  })
  blind: object;

  @Column({
    type: 'jsonb',
  })
  nfcForBankCards: object;

  @Column({
    type: 'jsonb',
  })
  qrRead: object;

  @Column({
    type: 'jsonb',
  })
  supportsUsd: object;

  @Column({
    type: 'jsonb',
  })
  supportsChargeRub: object;

  @Column({
    type: 'jsonb',
  })
  supportsEur: object;

  @Column({
    type: 'jsonb',
  })
  supportsRub: object;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  lastChangedDateTime: Date;

  @ManyToMany(() => Atm, (atm) => atm.services)
  atms: Atm[];
}
