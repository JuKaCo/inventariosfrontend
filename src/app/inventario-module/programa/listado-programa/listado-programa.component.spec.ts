import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoProgramaComponent } from './listado-programa.component';

describe('ListadoProgramaComponent', () => {
  let component: ListadoProgramaComponent;
  let fixture: ComponentFixture<ListadoProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoProgramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
