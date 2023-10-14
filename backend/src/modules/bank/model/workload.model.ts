import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';
import { BANK_WORKLOAD_TABLE_NAME } from '../../../constants';

@Entity(BANK_WORKLOAD_TABLE_NAME)
export class Workload {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'jsonb',
  })
  workload: object;

  @Column({
    type: 'int', nullable: true
  })
  load: number;
}
