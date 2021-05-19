import { TestBed } from '@angular/core/testing';

import { VentaCotizacionService } from './venta-cotizacion.service';

describe('VentaCotizacionService', () => {
  let service: VentaCotizacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentaCotizacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
