import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Country } from '../../countries/entity/country.entity';

@Entity()
export class Continent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @OneToMany(() => Country, (country) => country.continent)
  countries: Country[];
}
