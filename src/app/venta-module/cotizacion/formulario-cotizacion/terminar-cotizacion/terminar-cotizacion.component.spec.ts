import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminarCotizacionComponent } from './terminar-cotizacion.component';

describe('TerminarCotizacionComponent', () => {
  let component: TerminarCotizacionComponent;
  let fixture: ComponentFixture<TerminarCotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminarCotizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminarCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
