import { TestBed } from '@angular/core/testing';

import { InMemoryFakeDataService } from './in-memory-fake-data.service';

describe('InMemoryFakeDataService', () => {
  let service: InMemoryFakeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryFakeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
