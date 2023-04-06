import { Injectable } from '@nestjs/common';

@Injectable()
export class ParksApiService {
  async getParksByLocation(
    latitude: number,
    longitude: number,
    distance: number,
  ) {
    // Simulamos una respuesta de la API
    const mockData = [
      {
        id: 1,
        name: 'Park A',
        latitude: 40.73061,
        longitude: -73.935242,
      },
      {
        id: 2,
        name: 'Park B',
        latitude: 40.755661,
        longitude: -73.986932,
      },
    ];

    // Filtramos los parques dentro de la distancia especificada
    return mockData.filter((park) => {
      const distanceToPark = this.calculateDistance(
        latitude,
        longitude,
        park.latitude,
        park.longitude,
      );
      return distanceToPark <= distance;
    });
  }

  private calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ): number {
    const R = 6371; // Radio de la Tierra en km
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distancia en km
  }

  private deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }
}
