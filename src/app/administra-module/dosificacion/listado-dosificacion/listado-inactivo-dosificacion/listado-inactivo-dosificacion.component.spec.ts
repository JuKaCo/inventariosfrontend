import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoInactivoDosificacionComponent } from './listado-inactivo-dosificacion.component';

describe('ListadoInactivoDosificacionComponent', () => {
  let component: ListadoInactivoDosificacionComponent;
  let fixture: ComponentFixture<ListadoInactivoDosificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoInactivoDosificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoInactivoDosificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
