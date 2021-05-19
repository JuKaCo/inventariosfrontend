import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCotizacionItemCotizacionComponent } from './view-cotizacion-item-cotizacion.component';

describe('ViewCotizacionItemCotizacionComponent', () => {
  let component: ViewCotizacionItemCotizacionComponent;
  let fixture: ComponentFixture<ViewCotizacionItemCotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCotizacionItemCotizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCotizacionItemCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
