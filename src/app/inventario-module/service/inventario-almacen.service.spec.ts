import { TestBed } from '@angular/core/testing';

import { InventarioAlmacenService } from './inventario-almacen.service';

describe('InventarioAlmacenService', () => {
  let service: InventarioAlmacenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventarioAlmacenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
