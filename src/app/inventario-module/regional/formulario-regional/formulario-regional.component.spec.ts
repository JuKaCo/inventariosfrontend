import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRegionalComponent } from './formulario-regional.component';

describe('FormularioRegionalComponent', () => {
  let component: FormularioRegionalComponent;
  let fixture: ComponentFixture<FormularioRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
