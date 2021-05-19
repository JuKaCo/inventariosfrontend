import { TestBed } from '@angular/core/testing';

import { VentaCotizacionItemService } from './venta-cotizacion-item.service';

describe('VentaCotizacionItemService', () => {
  let service: VentaCotizacionItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentaCotizacionItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
