import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAlmacenComponent } from './listado-almacen.component';

describe('ListadoAlmacenComponent', () => {
  let component: ListadoAlmacenComponent;
  let fixture: ComponentFixture<ListadoAlmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoAlmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
