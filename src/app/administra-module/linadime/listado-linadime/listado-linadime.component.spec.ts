import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoLinadimeComponent } from './listado-linadime.component';

describe('ListadoLinadimeComponent', () => {
  let component: ListadoLinadimeComponent;
  let fixture: ComponentFixture<ListadoLinadimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoLinadimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoLinadimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
