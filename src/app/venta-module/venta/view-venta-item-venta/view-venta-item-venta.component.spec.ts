import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVentaItemVentaComponent } from './view-venta-item-venta.component';

describe('ViewVentaItemVentaComponent', () => {
  let component: ViewVentaItemVentaComponent;
  let fixture: ComponentFixture<ViewVentaItemVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVentaItemVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVentaItemVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
