import { TestBed } from '@angular/core/testing';

import { InventarioProductoService } from './inventario-producto.service';

describe('InventarioProductoService', () => {
  let service: InventarioProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventarioProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
