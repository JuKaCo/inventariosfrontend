import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormItemCotizacionComponent } from './form-item-cotizacion.component';

describe('FormItemCotizacionComponent', () => {
  let component: FormItemCotizacionComponent;
  let fixture: ComponentFixture<FormItemCotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormItemCotizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormItemCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
