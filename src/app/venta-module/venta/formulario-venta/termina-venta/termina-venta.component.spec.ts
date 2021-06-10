import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminaVentaComponent } from './termina-venta.component';

describe('TerminaVentaComponent', () => {
  let component: TerminaVentaComponent;
  let fixture: ComponentFixture<TerminaVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminaVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminaVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
