import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItemKardexCotizacionComponent } from './lista-item-kardex-cotizacion.component';

describe('ListaItemKardexCotizacionComponent', () => {
  let component: ListaItemKardexCotizacionComponent;
  let fixture: ComponentFixture<ListaItemKardexCotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaItemKardexCotizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaItemKardexCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
