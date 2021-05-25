import { TestBed } from '@angular/core/testing';

import { AdministraDosificacionService } from './administra-dosificacion.service';

describe('AdministraDosificacionService', () => {
  let service: AdministraDosificacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministraDosificacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
