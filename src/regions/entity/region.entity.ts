import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { City } from '../../cities/entity/city.entity';
import { Province } from '../../provinces/entity/province.entity';

@Entity()
export class Region {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  shortName: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @ManyToOne(() => City, (city) => city.regions)
  city: City;

  @OneToMany(() => Province, (province) => province.region)
  provinces: Province[];
}
