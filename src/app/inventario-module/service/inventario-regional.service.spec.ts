import { TestBed } from '@angular/core/testing';

import { InventarioRegionalService } from './inventario-regional.service';

describe('InventarioRegionalService', () => {
  let service: InventarioRegionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventarioRegionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
