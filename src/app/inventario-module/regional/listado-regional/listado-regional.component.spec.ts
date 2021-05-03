import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRegionalComponent } from './listado-regional.component';

describe('ListadoRegionalComponent', () => {
  let component: ListadoRegionalComponent;
  let fixture: ComponentFixture<ListadoRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
