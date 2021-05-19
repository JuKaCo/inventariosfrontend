import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosGeneralesCotizacionComponent } from './datos-generales-cotizacion.component';

describe('DatosGeneralesCotizacionComponent', () => {
  let component: DatosGeneralesCotizacionComponent;
  let fixture: ComponentFixture<DatosGeneralesCotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosGeneralesCotizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosGeneralesCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
