import { TestBed } from '@angular/core/testing';

import { InventarioEntradaItemService } from './inventario-entrada-item.service';

describe('InventarioEntradaItemService', () => {
  let service: InventarioEntradaItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventarioEntradaItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
