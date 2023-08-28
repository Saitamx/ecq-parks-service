import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Continent } from '../../continent/entity/continent.entity';
import { City } from '../../cities/entity/city.entity';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 10 })
  code: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @ManyToOne(() => Continent, (continent) => continent.countries)
  continent: Continent;

  @OneToMany(() => City, (city) => city.country)
  cities: City[];
}
