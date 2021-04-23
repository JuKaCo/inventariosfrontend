import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProveedorComponent } from './formulario-proveedor.component';

describe('FormularioProvedorComponent', () => {
  let component: FormularioProveedorComponent;
  let fixture: ComponentFixture<FormularioProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
