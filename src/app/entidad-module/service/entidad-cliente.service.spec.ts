import { TestBed } from '@angular/core/testing';

import { EntidadClienteService } from './entidad-cliente.service';

describe('EntidadClienteService', () => {
  let service: EntidadClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntidadClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
