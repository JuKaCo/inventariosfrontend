import { TestBed } from '@angular/core/testing';

import { InventarioEntradaService } from './inventario-entrada.service';

describe('InventarioEntradaService', () => {
  let service: InventarioEntradaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventarioEntradaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
