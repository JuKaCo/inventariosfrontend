import { TestBed } from '@angular/core/testing';

import { VentaVentaService } from './venta-venta.service';

describe('VentaVentaService', () => {
  let service: VentaVentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentaVentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
