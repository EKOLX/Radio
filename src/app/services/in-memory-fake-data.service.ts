import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryFakeDataService implements InMemoryDbService {

  createDb() {
    const channels = [
      { id: 101, name: 'FM 101' },
      { id: 102, name: 'FM 102' },
      { id: 103, name: 'FM 103' },
      { id: 104, name: 'FM 104' },
      { id: 105, name: 'FM 105' },
      { id: 106, name: 'FM 106' },
      { id: 107, name: 'FM 107' }
    ]
    return { channels };
  }
}
