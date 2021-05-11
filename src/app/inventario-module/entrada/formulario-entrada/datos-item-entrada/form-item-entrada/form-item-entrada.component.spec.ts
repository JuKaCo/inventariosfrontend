import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormItemEntradaComponent } from './form-item-entrada.component';

describe('FormItemEntradaComponent', () => {
  let component: FormItemEntradaComponent;
  let fixture: ComponentFixture<FormItemEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormItemEntradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormItemEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
