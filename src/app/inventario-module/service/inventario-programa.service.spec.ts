import { TestBed } from '@angular/core/testing';

import { InventarioProgramaService } from './inventario-programa.service';

describe('InventarioProgramaService', () => {
  let service: InventarioProgramaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventarioProgramaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
