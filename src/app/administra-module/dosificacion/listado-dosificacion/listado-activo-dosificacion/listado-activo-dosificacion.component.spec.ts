import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoActivoDosificacionComponent } from './listado-activo-dosificacion.component';

describe('ListadoActivoDosificacionComponent', () => {
  let component: ListadoActivoDosificacionComponent;
  let fixture: ComponentFixture<ListadoActivoDosificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoActivoDosificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoActivoDosificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
