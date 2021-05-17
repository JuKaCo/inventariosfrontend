import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCotizacionComponent } from './listado-cotizacion.component';

describe('ListadoCotizacionComponent', () => {
  let component: ListadoCotizacionComponent;
  let fixture: ComponentFixture<ListadoCotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCotizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
