import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Region } from '../../regions/entity/region.entity';
import { Municipality } from '../../municipalities/entity/municipality.entity';

@Entity()
export class Province {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @ManyToOne(() => Region, (region) => region.provinces)
  region: Region;

  @OneToMany(() => Municipality, (municipality) => municipality.province)
  municipalities: Municipality[];
}
