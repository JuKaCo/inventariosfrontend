import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItemKardexVentaComponent } from './lista-item-kardex-venta.component';

describe('ListaItemKardexVentaComponent', () => {
  let component: ListaItemKardexVentaComponent;
  let fixture: ComponentFixture<ListaItemKardexVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaItemKardexVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaItemKardexVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
