import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  Point,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ATM_TABLE_NAME } from '../../../constants';
import { AtmServices } from './services.model';

@Entity(ATM_TABLE_NAME)
export class Atm {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  address: string;

  @Column({ type: 'boolean', nullable: false })
  allDay: boolean;

  @Column('geography', {
    spatialFeatureType: 'Point',
    srid: 4326,
  })
  point: Point;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  lastChangedDateTime: Date;

  @ManyToMany(() => AtmServices, (service) => service.atms)
  @JoinTable()
  services: AtmServices[];
}
