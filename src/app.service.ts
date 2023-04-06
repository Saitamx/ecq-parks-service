import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  getDescription(): string {
    return `
      Available endpoints:
      1. GET /parks - Retrieve all parks
      2. GET /parks/:id - Retrieve a specific park by ID
      3. POST /parks - Create a new park
      4. PUT /parks/:id - Update an existing park
      5. DELETE /parks/:id - Delete a park by ID
    `;
  }
}
