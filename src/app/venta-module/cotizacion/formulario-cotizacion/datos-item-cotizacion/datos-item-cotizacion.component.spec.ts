import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosItemCotizacionComponent } from './datos-item-cotizacion.component';

describe('DatosItemCotizacionComponent', () => {
  let component: DatosItemCotizacionComponent;
  let fixture: ComponentFixture<DatosItemCotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosItemCotizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosItemCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
