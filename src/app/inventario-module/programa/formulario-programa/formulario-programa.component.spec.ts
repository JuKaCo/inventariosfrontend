import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProgramaComponent } from './formulario-programa.component';

describe('FormularioProgramaComponent', () => {
  let component: FormularioProgramaComponent;
  let fixture: ComponentFixture<FormularioProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioProgramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
