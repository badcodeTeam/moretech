import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  Point,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { BANK_TABLE_NAME } from '../../../constants';
import { Workload } from './workload.model';

@Entity(BANK_TABLE_NAME)
export class Bank {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  salePointName: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  address: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  status: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  rko: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  officeType: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  salePointFormat: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  suoAvailability: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  hasRamp: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  metroStation: string;

  @Column({ type: 'int', nullable: true })
  distance: number;

  @Column({ type: 'boolean', nullable: true })
  kep: boolean;

  @Column({ type: 'boolean', nullable: true })
  myBranch: boolean;

  @Column('geography', {
    spatialFeatureType: 'Point',
    srid: 4326,
  })
  point: Point;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  openHours: object[];

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  openHoursIndividual: object[];

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  lastChangedDateTime: Date;

  @OneToOne(() => Workload)
  @JoinColumn()
  workload: Workload;
}
