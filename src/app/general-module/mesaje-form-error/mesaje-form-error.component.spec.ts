import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesajeFormErrorComponent } from './mesaje-form-error.component';

describe('MesajeFormErrorComponent', () => {
  let component: MesajeFormErrorComponent;
  let fixture: ComponentFixture<MesajeFormErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesajeFormErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesajeFormErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
