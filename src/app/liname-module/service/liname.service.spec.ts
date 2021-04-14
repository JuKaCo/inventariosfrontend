import { TestBed } from '@angular/core/testing';

import { LinameService } from './liname.service';

describe('LinameService', () => {
  let service: LinameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
