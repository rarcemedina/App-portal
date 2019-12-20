import { TestBed } from '@angular/core/testing';

import { PasantiaService } from './pasantia.service';

describe('PasantiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasantiaService = TestBed.get(PasantiaService);
    expect(service).toBeTruthy();
  });
});
