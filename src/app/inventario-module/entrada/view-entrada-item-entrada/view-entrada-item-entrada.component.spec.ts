import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEntradaItemEntradaComponent } from './view-entrada-item-entrada.component';

describe('ViewEntradaItemEntradaComponent', () => {
  let component: ViewEntradaItemEntradaComponent;
  let fixture: ComponentFixture<ViewEntradaItemEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEntradaItemEntradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEntradaItemEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
