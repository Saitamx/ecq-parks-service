import { Park } from '../src/parks/interfaces/park.interface';

export const ParkMock: Park = {
  id: 5,
  name: 'Parque uno',
  description: 'descripcion del parque uno',

  location: {
    address: '789 New Street',
    latitude: 23.4567,
    longitude: 54.321,
  },
  features: {
    pet_friendly: false,
    bike_parking: false,
    car_parking: true,
    trash_bins: false,
    water_fountain: true,
    shade: false,
    rest_areas: false,
    lighting: false,
    security: {
      cameras: false,
      security_personnel: true,
    },
  },
  images: [
    'https://example.com/newimage1.jpg',
    'https://example.com/newimage2.jpg',
  ],
  nearby_services: [
    {
      type: 'Cafe',
      name: 'Updated Cafe Name',
      distance: 0.3,
    },
  ],
};
