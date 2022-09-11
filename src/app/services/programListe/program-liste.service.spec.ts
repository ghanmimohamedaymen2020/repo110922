import { TestBed } from '@angular/core/testing';

import { ProgramListeService } from './program-liste.service';

describe('ProgramListeService', () => {
  let service: ProgramListeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramListeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
