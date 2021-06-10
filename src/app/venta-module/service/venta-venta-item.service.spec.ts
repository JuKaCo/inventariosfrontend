import { TestBed } from '@angular/core/testing';

import { VentaVentaItemService } from './venta-venta-item.service';

describe('VentaVentaItemService', () => {
  let service: VentaVentaItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentaVentaItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
