import { TestBed } from '@angular/core/testing';

import { EntidadProveedorService } from './entidad-proveedor.service';

describe('EntidadProveedorService', () => {
  let service: EntidadProveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntidadProveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
