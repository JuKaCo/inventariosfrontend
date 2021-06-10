import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormItemVentaComponent } from './form-item-venta.component';

describe('FormItemVentaComponent', () => {
  let component: FormItemVentaComponent;
  let fixture: ComponentFixture<FormItemVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormItemVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormItemVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
