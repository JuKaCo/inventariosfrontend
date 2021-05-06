import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosItemEntradaComponent } from './datos-item-entrada.component';

describe('DatosItemEntradaComponent', () => {
  let component: DatosItemEntradaComponent;
  let fixture: ComponentFixture<DatosItemEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosItemEntradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosItemEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
