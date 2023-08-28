import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Country } from '../../countries/entity/country.entity';
import { Region } from '../../regions/entity/region.entity';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @ManyToOne(() => Country, (country) => country.cities)
  country: Country;

  @OneToMany(() => Region, (region) => region.city)
  regions: Region[];
}
