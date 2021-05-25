import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDosificacionComponent } from './formulario-dosificacion.component';

describe('FormularioDosificacionComponent', () => {
  let component: FormularioDosificacionComponent;
  let fixture: ComponentFixture<FormularioDosificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDosificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDosificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
