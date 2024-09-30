import { TestBed } from '@angular/core/testing';

import { FoodnwasteService } from './foodnwaste.service';

describe('FoodnwasteService', () => {
  let service: FoodnwasteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodnwasteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
