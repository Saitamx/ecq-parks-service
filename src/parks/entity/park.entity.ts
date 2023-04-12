import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ParkEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: '' })
  description: string;

  @Column('json')
  location: {
    address: string;
    latitude: number;
    longitude: number;
  };

  @Column('json')
  features: {
    pet_friendly: boolean;
    bike_parking: boolean;
    car_parking: boolean;
    trash_bins: boolean;
    water_fountain: boolean;
    shade: boolean;
    rest_areas: boolean;
    lighting: boolean;
    security: {
      cameras: boolean;
      security_personnel: boolean;
    };
  };

  @Column('simple-array')
  images: string[];

  @Column('json')
  nearby_services: {
    type: string;
    name: string;
    distance: number;
  }[];
}
