import { TestBed } from '@angular/core/testing';

import { HobbitsesService } from './hobbitses.service';

describe('HobbitsesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HobbitsesService = TestBed.get(HobbitsesService);
    expect(service).toBeTruthy();
  });
});
