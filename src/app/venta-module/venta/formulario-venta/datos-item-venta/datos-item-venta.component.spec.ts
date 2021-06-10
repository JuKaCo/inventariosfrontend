import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosItemVentaComponent } from './datos-item-venta.component';

describe('DatosItemVentaComponent', () => {
  let component: DatosItemVentaComponent;
  let fixture: ComponentFixture<DatosItemVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosItemVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosItemVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
