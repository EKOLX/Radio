import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryFakeDataService implements InMemoryDbService {

  createDb() {
    const channels = [
      { id: 1, name: 'FM 101' },
      { id: 2, name: 'FM 102' },
      { id: 3, name: 'FM 103' },
      { id: 4, name: 'FM 104' },
      { id: 5, name: 'FM 105' },
      { id: 6, name: 'FM 106' }
    ]
    return { channels };
  }
}
