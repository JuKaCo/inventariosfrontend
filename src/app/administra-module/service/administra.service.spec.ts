import { TestBed } from '@angular/core/testing';

import { AdministraService } from './administra.service';

describe('LinameService', () => {
  let service: AdministraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
