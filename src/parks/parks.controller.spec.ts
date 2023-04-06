import { Test, TestingModule } from '@nestjs/testing';
import { ParksController } from './parks.controller';
import { ParksService } from './parks.service';
import { BadRequestException } from '@nestjs/common';
import { Park } from './interfaces/park.interface';

describe('ParksController', () => {
  let controller: ParksController;
  let service: ParksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParksController],
      providers: [ParksService],
    }).compile();

    controller = module.get<ParksController>(ParksController);
    service = module.get<ParksService>(ParksService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of parks', async () => {
      const result: Park[] = [
        {
          id: 1,
          name: 'Park A',
          location: {
            address: '123 Park A St',
            latitude: 40.12345,
            longitude: -74.12345,
          },
          features: {
            pet_friendly: true,
            bike_parking: true,
            car_parking: true,
            trash_bins: true,
            water_fountain: true,
            shade: true,
            rest_areas: true,
            lighting: true,
            security: {
              cameras: true,
              security_personnel: true,
            },
          },
          images: ['image1.jpg', 'image2.jpg'],
          nearby_services: [
            {
              type: 'restaurant',
              name: 'Restaurant A',
              distance: 500,
            },
          ],
        },
      ];
      jest
        .spyOn(service, 'getParks')
        .mockImplementation(() => Promise.resolve(result));

      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
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
      const id = '4';
      jest
        .spyOn(service, 'getParkById')
        .mockImplementation(() => Promise.resolve(result));

      expect(await controller.findOne(id)).toBe(result);
    });

    it('should throw a BadRequestException if there is an error finding the park by id', async () => {
      const id = '4';
      jest
        .spyOn(service, 'getParkById')
        .mockImplementation(() =>
          Promise.reject(new Error('Error finding park by id')),
        );

      await expect(controller.findOne(id)).rejects.toThrow(BadRequestException);
    });
  });

  describe('create', () => {
    it('should create a new park and return it', async () => {
      const newPark: Park = {
        id: 2,
        name: 'Park B',
        location: {
          address: '456 Park B St',
          latitude: 40.6789,
          longitude: -74.6789,
        },
        features: {
          pet_friendly: false,
          bike_parking: false,
          car_parking: false,
          trash_bins: false,
          water_fountain: false,
          shade: false,
          rest_areas: false,
          lighting: false,
          security: {
            cameras: false,
            security_personnel: false,
          },
        },
        images: ['image3.jpg', 'image4.jpg'],
        nearby_services: [
          {
            type: 'cafe',
            name: 'Cafe B',
            distance: 300,
          },
        ],
      };
      jest
        .spyOn(service, 'create')
        .mockImplementation(() => Promise.resolve(newPark));
      expect(await controller.create(newPark)).toBe(newPark);
    });

    it('should throw a BadRequestException if there is an error creating the park', async () => {
      const newPark: Park = {
        id: 3,
        name: 'Park C',
        location: {
          address: '789 Park C St',
          latitude: 40.98765,
          longitude: -74.98765,
        },
        features: {
          pet_friendly: true,
          bike_parking: true,
          car_parking: true,
          trash_bins: true,
          water_fountain: true,
          shade: true,
          rest_areas: true,
          lighting: true,
          security: {
            cameras: true,
            security_personnel: true,
          },
        },
        images: ['image5.jpg', 'image6.jpg'],
        nearby_services: [
          {
            type: 'store',
            name: 'Store C',
            distance: 200,
          },
        ],
      };
      jest
        .spyOn(service, 'create')
        .mockImplementation(() =>
          Promise.reject(new Error('Error creating park')),
        );

      await expect(controller.create(newPark)).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('update', () => {
    it('should update a park and return it', async () => {
      const updatedPark: Park = {
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
        .spyOn(service, 'update')
        .mockImplementation(() => Promise.resolve(updatedPark));

      expect(await controller.update(1, updatedPark)).toBe(updatedPark);
    });

    it('should throw a BadRequestException if there is an error updating the park', async () => {
      const updatedPark: Park = {
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
        .spyOn(service, 'update')
        .mockImplementation(() =>
          Promise.reject(new Error('Error updating park')),
        );

      await expect(controller.update(1, updatedPark)).rejects.toThrow(
        BadRequestException,
      );
    });
  });
});
