import { TestBed } from '@angular/core/testing';

import { ResultserviceService } from './resultservice.service';

describe('ResultserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResultserviceService = TestBed.get(ResultserviceService);
    expect(service).toBeTruthy();
  });
});
