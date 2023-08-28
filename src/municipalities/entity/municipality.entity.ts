import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Province } from '../../provinces/entity/province.entity';
import { ParkEntity } from '../../parks/entity/park.entity';

@Entity()
export class Municipality {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @ManyToOne(() => Province, (province) => province.municipalities)
  province: Province;

  @OneToMany(() => ParkEntity, (park) => park.municipality)
  parks: ParkEntity[];
}
