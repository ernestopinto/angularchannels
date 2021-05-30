import { TestBed } from '@angular/core/testing';

import { FakersService } from './fakers.service';

describe('FakersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakersService = TestBed.get(FakersService);
    expect(service).toBeTruthy();
  });
});
