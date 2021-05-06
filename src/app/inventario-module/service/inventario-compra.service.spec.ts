import { TestBed } from '@angular/core/testing';

import { InventarioCompraService } from './inventario-compra.service';

describe('InventarioCompraService', () => {
  let service: InventarioCompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventarioCompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
