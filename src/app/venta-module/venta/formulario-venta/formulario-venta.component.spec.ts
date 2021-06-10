import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioVentaComponent } from './formulario-venta.component';

describe('FormularioVentaComponent', () => {
  let component: FormularioVentaComponent;
  let fixture: ComponentFixture<FormularioVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
