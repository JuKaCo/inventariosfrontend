import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosGeneralesEntradaComponent } from './datos-generales-entrada.component';

describe('DatosGeneralesEntradaComponent', () => {
  let component: DatosGeneralesEntradaComponent;
  let fixture: ComponentFixture<DatosGeneralesEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosGeneralesEntradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosGeneralesEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
