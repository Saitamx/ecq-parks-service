import { Test, TestingModule } from '@nestjs/testing';
import { ParksService } from './parks.service';
import { Park } from './interfaces/park.interface';

describe('ParksService', () => {
  let service: ParksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParksService],
    }).compile();

    service = module.get<ParksService>(ParksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getParks', () => {
    it('should return an array of parks', async () => {
      const result: Park[] = [
        {
          id: 5,
          name: 'Updated Park Name',
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
        },
      ];
      jest
        .spyOn(service, 'getParks')
        .mockImplementation(() => Promise.resolve(result));

      expect(await service.getParks()).toBe(result);
    });
  });

  describe('getParkById', () => {
    it('should return a park by id', async () => {
      const result: Park = {
        id: 5,
        name: 'Updated Park Name',
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
      const id = 1;
      jest
        .spyOn(service, 'getParkById')
        .mockImplementation(() => Promise.resolve(result));

      expect(await service.getParkById(id)).toBe(result);
    });
  });

  describe('create', () => {
    it('should create a new park and return it', async () => {
      const newPark: Park = {
        id: 5,
        name: 'Updated Park Name',
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
      jest
        .spyOn(service, 'create')
        .mockImplementation(() => Promise.resolve(newPark));

      expect(await service.create(newPark)).toBe(newPark);
    });
  });

  // Agrega aquí las pruebas para los futuros métodos (update y delete)
});
