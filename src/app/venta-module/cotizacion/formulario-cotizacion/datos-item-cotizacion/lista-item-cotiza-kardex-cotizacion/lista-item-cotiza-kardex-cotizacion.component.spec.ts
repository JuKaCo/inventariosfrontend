import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItemCotizaKardexCotizacionComponent } from './lista-item-cotiza-kardex-cotizacion.component';

describe('ListaItemCotizaKardexCotizacionComponent', () => {
  let component: ListaItemCotizaKardexCotizacionComponent;
  let fixture: ComponentFixture<ListaItemCotizaKardexCotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaItemCotizaKardexCotizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaItemCotizaKardexCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
