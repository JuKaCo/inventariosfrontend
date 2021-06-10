import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosGeneralesVentaComponent } from './datos-generales-venta.component';

describe('DatosGeneralesVentaComponent', () => {
  let component: DatosGeneralesVentaComponent;
  let fixture: ComponentFixture<DatosGeneralesVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosGeneralesVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosGeneralesVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
