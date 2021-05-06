import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminarEntradaComponent } from './terminar-entrada.component';

describe('TerminarEntradaComponent', () => {
  let component: TerminarEntradaComponent;
  let fixture: ComponentFixture<TerminarEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminarEntradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminarEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
