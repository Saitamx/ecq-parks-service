import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Location } from '../interfaces/location.interface';
import { Features } from '../interfaces/features.interface';
import { Images } from '../interfaces/images.interface';
import { NearbyServices } from '../interfaces/nearby-services.interface';

@Entity()
export class ParkEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'varchar', nullable: true })
  commune: string;

  @Column({ default: 100 })
  ranking: number;

  @Column({ default: '' })
  description: string;

  @Column('json')
  location: Location;

  @Column('json')
  features: Features;

  @Column('simple-array')
  images: Images[];

  @Column('json')
  nearby_services: NearbyServices[];
}
