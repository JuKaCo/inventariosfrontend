import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoLinameComponent } from './listado-liname.component';

describe('ListadoLinameComponent', () => {
  let component: ListadoLinameComponent;
  let fixture: ComponentFixture<ListadoLinameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoLinameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoLinameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
