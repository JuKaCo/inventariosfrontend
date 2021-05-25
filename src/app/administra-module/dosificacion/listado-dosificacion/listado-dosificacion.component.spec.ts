import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDosificacionComponent } from './listado-dosificacion.component';

describe('ListadoDosificacionComponent', () => {
  let component: ListadoDosificacionComponent;
  let fixture: ComponentFixture<ListadoDosificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoDosificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDosificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
