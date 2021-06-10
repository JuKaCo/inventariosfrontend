import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItemVentaKardexVentaComponent } from './lista-item-venta-kardex-venta.component';

describe('ListaItemVentaKardexVentaComponent', () => {
  let component: ListaItemVentaKardexVentaComponent;
  let fixture: ComponentFixture<ListaItemVentaKardexVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaItemVentaKardexVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaItemVentaKardexVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
